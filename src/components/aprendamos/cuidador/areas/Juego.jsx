import React from "react";
import "./areas.css";
import iconoJuegoWhite from "./../../../../images/areas-img/icon_juego (1).png";
import iconoTipJuego from "./../../../../images/areas-img/icono_tip_juego.svg";
import fondo from "./../../../../images/areas-img/socioemocional_fondo_desktop.png";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth,db } from "../../../firebase/firebase";


export const Juego= ({contenidoFirebase, error, loading, firebaseUser, idChild}) => {

 const [edad, setEdad]= React.useState("")
  const [usuarioChild] = useCollection(
    db.collection("usuarios").doc(firebaseUser.uid).collection("addChild"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  React.useEffect(() => {
    if (firebaseUser !== null  && idChild!=="") {
      const childData = db.collection("usuarios").doc(firebaseUser.uid).collection("addChild").doc(idChild);
      childData
        .get()
        .then((snapShots) => {
         setEdad(snapShots.data().edadChild)
        })
        .catch(function (error) {
          console.log("Error getting document:", error);
        });
      }
 /*  const childData= db.collection("usuarios").doc(firebaseUser.uid).collection("addChild").doc("OxtF7ijtoOlOX7zx3xcY")
  console.log("hola", childData.data().edadChild)
    ///Obteniendo todo el contenido de firebase///*/
  }, [firebaseUser, idChild]);


  return (
    <div>
      <div className="box-title-juego show-desktop">
        <img
          src={iconoJuegoWhite}
          className="icono-area"
          alt="gota de agua"
        />
        <h1 className="title-area">RUTINA</h1>
      </div>
      <div className="list-videos-tips">
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}
        {contenidoFirebase && (<div className="row">
            {contenidoFirebase.docs.filter(item=>  item.data().seccion==="Higiene y Agua Segura" &&  item.data().edad==edad ).map(item => (
                <div key={item.id} className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div className="box-section">
                  <img
                    src={iconoTipJuego}
                    className="icono-video-tip"
                    alt="icono de tip"
                  />
                  <div className="box-text-video-tip">
                    <h3 className="subtittle-video-tip">
                      {item.data().titulo}
                    </h3>
                    <h5 className="text-video-tip">Tip N° {item.data().n_tip}</h5>
                  </div>
                </div>
              </div>
              ))}
               </div>)}
        </div>
      </div>
  );
};