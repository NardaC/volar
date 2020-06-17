import React from "react";
import "./areas.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import iconoJuegoWhite from "./../../../../images/areas-img/icon_juego (1).png";
import iconoTipJuego from "./../../../../images/areas-img/icono_tip_juego.svg";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth,db } from "../../../firebase/firebase";
import { Orbitals } from "react-spinners-css";


export const Juego = ({
  contenidoFirebase,
  error,
  loading,
  firebaseUser,
  idChild,
}) => {
  const [edad, setEdad] = React.useState("");


  const mandarNumberTipOficial = (numberTip) => {
    localStorage.setItem('localNumberTip', numberTip)
  };  

  React.useEffect(() => {
    if (firebaseUser !== null && idChild !== "") {
      const childData = db
        .collection("usuarios")
        .doc(firebaseUser.uid)
        .collection("addChild")
        .doc(idChild);
      childData
        .get()
        .then((snapShots) => {
          setEdad(snapShots.data().edadChild);
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
      {firebaseUser !== null ? (
        <div>
          <div className="box-title-juego show-desktop">
            <img
              src={iconoJuegoWhite}
              className="icono-area heartbeat"
              alt="gota de agua"
            />
            <h1 className="title-area  tracking-in-expand-fwd-top">JUEGO</h1>
          </div>
          <div className="list-videos-tips">
            {error && <strong>Error: {JSON.stringify(error)}</strong>}
            {loading && <div className="grande">
                <div className="centrando-spiner">
          <Orbitals color="#EF8B44" size={900} />
        </div>
      </div> }
            {contenidoFirebase && (
              <div className="row">
                {contenidoFirebase.docs
                  .filter(
                    (item) =>
                      item.data().seccion === "Juego" &&
                      item.data().edad == localStorage.getItem('edadChildLogueadoActive')
                  )
                  .map((item) => (
                    <div
                      key={item.id}
                      className="col-sm-12 col-md-12 col-lg-6 col-xl-6"
                    >
                      <a href={`/aprendamos/cuidador/${ localStorage.getItem('idChildLogueadoActive')}/juego/tips`}
                        onClick={() => mandarNumberTipOficial(item.data().n_tip)}>
                        
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
                            <h5 className="text-video-tip">
                              Tip N° {item.data().n_tip}
                            </h5>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <div className="box-title-juego show-desktop">
            <img
              src={iconoJuegoWhite}
              className="icono-area"
              alt="gota de agua"
            />
            <h1 className="title-area">JUEGO</h1>
          </div>
          <div className="list-videos-tips">
            {error && <strong>Error: {JSON.stringify(error)}</strong>}
            {loading && <span>Collection: Loading...</span>}
            {contenidoFirebase && (
              <div className="row">
                {contenidoFirebase.docs
                  .filter(
                    (item) =>
                      item.data().seccion === "Juego" &&
                      item.data().edad == JSON.parse(localStorage.getItem('dateChild')).edad
                  )
                  .map((item) => (
                    <div
                      key={item.id}
                      className="col-sm-12 col-md-12 col-lg-6 col-xl-6"
                    >
                      <a href="/aprendamos/cuidador/juego/tips"
                        onClick={() => mandarNumberTipOficial(item.data().n_tip)}>
                        
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
                            <h5 className="text-video-tip">
                              Tip N° {item.data().n_tip}
                            </h5>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
