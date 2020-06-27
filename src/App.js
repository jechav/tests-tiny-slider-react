import React from 'react';
import Basic from './demos/Basic';
import Images from './demos/Images';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Tests Tiny Slider React</h2>
      </header>
      <div className="demo-list">
        <h3>Basic</h3>
        <Basic
          settings={{
            items: 3,
            slideBy: 'page',
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
              '450': {
                items: 2,
              },
              '600': {
                items: 3,
              },
              '800': {
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
            axis: 'vertical',
            swipeAngle: false,
            speed: 400,
          }}
          className="carousel"
        />
      </div>
    </div>
  );
}

export default App;
