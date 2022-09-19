import React, { Component } from "react";
import "./css.css";
import dataGlasses from "./dataGlasses.json";
export default class Glasses extends Component {
  state = {
    glassType: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };
  renderImg = () => {
    dataGlasses.map((glass) => {
      <h5>{glass.name}</h5>;
    });
  };
  render() {
    let { glassType } = this.state;
    return (
      <div>
        <header>
          <div className="header container">
            <h1 style={{ color: "white", backgroundColor: "black" }}>
              TRY GLASSES APP ONLINE
            </h1>
          </div>
        </header>
        <div className="container vglasses py-3">
          <div className="row justify-content-between">
            <div className="col-6 vglasses__left">
              <div className="row" id="vglassesList">
                {dataGlasses.map((glass, index) => {
                  return (
                    <button key={index} className="col-4">
                      <img
                        onClick={() => {
                          this.setState({
                            glassType: glass,
                          });
                        }}
                        src={glass.url}
                        alt=""
                        style={{ height: 50 }}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="col-5 vglasses__right p-0">
              <div className="vglasses__card">
                <div className="vglasses__model" id="avatar">
                  <img src={glassType.url} alt="" />
                </div>
                <div
                  id="glassesInfo"
                  className="vglasses__info"
                  style={{ display: "block" }}
                >
                  <h5>Name: {glassType.name}</h5>
                  <button className="btn btn-danger">
                    Price: {glassType.price}$
                  </button>
                  <h5>Describie: {glassType.desc}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
