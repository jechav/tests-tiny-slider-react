import React, { memo } from 'react';
// import PropTypes from 'prop-types'
import TinySlider from 'tiny-slider-react';


function Basic({ settings, ...props }) {
  return (
    <TinySlider settings={settings} {...props}>
      <div className="item">
        <div className="img img-1">
          <a href="">0</a>
        </div>
        <p>
          Sunt dignissimos distinctio, veniam, tenetur aspernatur nulla!
        </p>
      </div>
      <div className="item">
        <div className="img img-2">
          <a href="">1</a>
        </div>
        <p>
          Corrupti, libero minima nihil expedita officiis? Quo.
        </p>
      </div>
      <div className="item">
        <div className="img img-3">
          <a href="">2</a>
        </div>
        <p>
          Alias rem, ab impedit recusandae repellat tempore.
        </p>
      </div>
      <div className="item">
        <div className="img img-4">
          <a href="">3</a>
        </div>
        <p>
          Nisi inventore quo delectus perspiciatis voluptatibus, quae.
        </p>
      </div>
      <div className="item">
        <div className="img img-5">
          <a href="">4</a>
        </div>
        <p>
          Nisi harum earum consectetur laudantium iusto, laboriosam.
        </p>
      </div>
      <div className="item">
        <div className="img img-6">
          <a href="">5</a>
        </div>
        <p>
          Dolores blanditiis neque, quis vitae? Reprehenderit, aliquam.
        </p>
      </div>
      <div className="item">
        <div className="img img-7">
          <a href="">6</a>
        </div>
        <p>
          Omnis dolorum eum blanditiis, ratione voluptates quod.
        </p>
      </div>
    </TinySlider>
  );
}

Basic.propTypes = {};
Basic.defaultProps = {};

export default memo(Basic);
