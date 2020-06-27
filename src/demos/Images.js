import React, { memo } from 'react';
// import PropTypes from 'prop-types'
import TinySlider from 'tiny-slider-react';

const defaultSettings = {};

function Images({ settings = {}, ...props }) {
  return (
    <TinySlider settings={{ ...defaultSettings, ...settings }} {...props}>
      <div className="item">
        <img
          src="https://source.unsplash.com/collection/993239/600x320"
          width="600"
          height="320"
          alt=""
        />
      </div>
      <div className="item">
        <img
          src="https://source.unsplash.com/collection/1673600/500x300"
          width="500"
          height="300"
          alt=""
        />
      </div>
      <div className="item">
        <img
          src="https://source.unsplash.com/collection/1513994/200x310"
          width="200"
          height="310"
          alt=""
        />
      </div>
      <div className="item">
        <img
          src="https://source.unsplash.com/collection/502925/400x330"
          width="400"
          height="330"
          alt=""
        />
      </div>
      <div className="item">
        <img
          src="https://source.unsplash.com/collection/1891993/640x300"
          width="640"
          height="300"
          alt=""
        />
      </div>
      <div className="item">
        <img
          src="https://source.unsplash.com/collection/1103088/360x240"
          width="360"
          height="240"
          alt=""
        />
      </div>
      <div className="item">
        <img
          src="https://source.unsplash.com/collection/548245/460x280"
          width="460"
          height="280"
          alt=""
        />
      </div>
    </TinySlider>
  );
}

Images.propTypes = {};
Images.defaultProps = {};

export default memo(Images);
