import React from "react";
import Basic from "./demos/Basic";
import Images from "./demos/Images";
import Rebuild from "./demos/Rebuild";
import ImagesLazy from "./demos/ImagesLazy";
import "tiny-slider/dist/tiny-slider.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Tests Tiny Slider React</h2>
        <span>tiny-slider-react: ^0.5.7</span>
      </header>
      <div className="demo-list">
        <h3>Basic</h3>
        <Basic
          settings={{
            items: 3,
            slideBy: "page",
            mouseDrag: true,
            swipeAngle: false,
            speed: 400,
          }}
          className="carousel"
        />
      </div>
      <div className="demo-list">
        <h3>Responsive</h3>
        <Basic
          settings={{
            loop: false,
            responsive: {
              450: {
                items: 2,
              },
              600: {
                items: 3,
              },
              800: {
                items: 5,
              },
            },
            swipeAngle: false,
            speed: 400,
          }}
          className="carousel"
        />
      </div>
      <div className="demo-list">
        <h3>Autowidth</h3>
        <Images
          settings={{
            autoWidth: true,
            items: 3.3,
            gutter: 10,
            mouseDrag: true,
            swipeAngle: false,
            speed: 400,
          }}
          className="carousel"
        />
      </div>
      <div className="demo-list">
        <h3>Vertical</h3>
        <Basic
          settings={{
            items: 2,
            axis: "vertical",
            swipeAngle: false,
            speed: 400,
          }}
          className="carousel"
        />
      </div>
      <div className="demo-list">
        <h3>Rebuild</h3>
        <Rebuild
          settings={{
            items: 2,
            lazyload: true,
            mouseDrag: true,
            speed: 400,
          }}
          className="carousel"
        />
      </div>
      <div className="demo-list">
        <h3>LazyLoad</h3>
        <ImagesLazy
          settings={{
            lazyload: true,
            lazyloadSelector: ".tns-lazy-img",
            nav: true,
            items: 2,
            mouseDrag: true,
            autoplay: false,
            loop: false,
            touch: true,
            controls: false,
          }}
          className="carousel"
        />
      </div>
    </div>
  );
}

export default App;
