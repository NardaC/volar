import React from "react";

import fabiola from "../../images/equipo/fabiola_1.png";
import sara from "../../images/equipo/sara_2.png";
import geraldine from "../../images/equipo/geraldine_3.png";
import aran from "../../images/equipo/arturo_4.png";
import maria from "../../images/equipo/guadalupe_5.png";

const CarouselDesktop = () => {
  return (
    <>
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-2">
                <img
                  className="card-img-top"
                  src={fabiola}
                  alt="Card image cap"
                />
              </div>
            </div>

            <div className="col-md-4 clearfix d-none d-md-block">
              <div className="card mb-2">
                <img className="card-img-top" src={sara} alt="Card image cap" />
              </div>
            </div>

            <div className="col-md-4 clearfix d-none d-md-block">
              <div className="card mb-2">
                <img
                  className="card-img-top"
                  src={geraldine}
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-2">
                <img className="card-img-top" src={aran} alt="Card image cap" />
              </div>
            </div>

            <div className="col-md-4 clearfix d-none d-md-block">
              <div className="card mb-2">
                <img
                  className="card-img-top"
                  src={maria}
                  alt="Card image cap"
                />
              </div>
            </div>

            <div className="col-md-4 clearfix clearfix d-none d-md-block">
              <div className="card mb-2">
                <img
                  className="card-img-top"
                  src={fabiola}
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-2">
                <img className="card-img-top" src={sara} alt="Card image cap" />
              </div>
            </div>

            <div className="col-md-4 clearfix d-none d-md-block">
              <div className="card mb-2">
                <img
                  className="card-img-top"
                  src={geraldine}
                  alt="Card image cap"
                />
              </div>
            </div>

            <div className="col-md-4 clearfix clearfix d-none d-md-block">
              <div className="card mb-2">
                <img className="card-img-top" src={aran} alt="Card image cap" />
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-2">
                <img
                  className="card-img-top"
                  src={maria}
                  alt="Card image cap"
                />
              </div>
            </div>

            <div className="col-md-4 clearfix d-none d-md-block">
              <div className="card mb-2">
                <img
                  className="card-img-top"
                  src={fabiola}
                  alt="Card image cap"
                />
              </div>
            </div>

            <div className="col-md-4 clearfix clearfix d-none d-md-block">
              <div className="card mb-2">
                <img className="card-img-top" src={sara} alt="Card image cap" />
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-2">
                <img
                  className="card-img-top"
                  src={geraldine}
                  alt="Card image cap"
                />
              </div>
            </div>

            <div className="col-md-4 clearfix d-none d-md-block">
              <div className="card mb-2">
                <img className="card-img-top" src={aran} alt="Card image cap" />
              </div>
            </div>

            <div className="col-md-4 clearfix clearfix d-none d-md-block">
              <div className="card mb-2">
                <img
                  className="card-img-top"
                  src={maria}
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselDesktop;
