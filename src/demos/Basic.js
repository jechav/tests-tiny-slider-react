import React, { memo } from 'react';
import TinySlider from 'tiny-slider-react';

function Basic({ settings, ...props }) {
  return (
    <TinySlider settings={settings} {...props}>
      <div className="item">
        <div className="img img-1">
          <button type="button" className="link-button">
            0
          </button>
        </div>
        <p>Sunt dignissimos distinctio, veniam, tenetur aspernatur nulla!</p>
      </div>
      <div className="item">
        <div className="img img-2">
          <button type="button" className="link-button">
            1
          </button>
        </div>
        <p>Corrupti, libero minima nihil expedita officiis? Quo.</p>
      </div>
      <div className="item">
        <div className="img img-3">
          <button type="button" className="link-button">
            2
          </button>
        </div>
        <p>Alias rem, ab impedit recusandae repellat tempore.</p>
      </div>
      <div className="item">
        <div className="img img-4">
          <button type="button" className="link-button">
            3
          </button>
        </div>
        <p>Nisi inventore quo delectus perspiciatis voluptatibus, quae.</p>
      </div>
      <div className="item">
        <div className="img img-5">
          <button type="button" className="link-button">
            4
          </button>
        </div>
        <p>Nisi harum earum consectetur laudantium iusto, laboriosam.</p>
      </div>
      <div className="item">
        <div className="img img-6">
          <button type="button" className="link-button">
            5
          </button>
        </div>
        <p>Dolores blanditiis neque, quis vitae? Reprehenderit, aliquam.</p>
      </div>
      <div className="item">
        <div className="img img-7">
          <button type="button" className="link-button">
            6
          </button>
        </div>
        <p>Omnis dolorum eum blanditiis, ratione voluptates quod.</p>
      </div>
    </TinySlider>
  );
}

Basic.propTypes = {};
Basic.defaultProps = {};

export default memo(Basic);
