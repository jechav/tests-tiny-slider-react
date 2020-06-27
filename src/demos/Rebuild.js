import React, { useState } from 'react';
import TinySlider from 'tiny-slider-react';

const loadingImage =
  'data:image/gif;base64, R0lGODlhAQABAPAAAMzMzAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';

const imgStyles = {
  width: '100%',
  height: '320px',
  objectFit: 'cover',
};
const imgs1 = ['http://d2ji2mue1p384z.cloudfront.net/img/480x360/220048.jpg'];

const imgs2 = [
  'http://d2ji2mue1p384z.cloudfront.net/img/480x360/162951.jpg',
  'http://d2ji2mue1p384z.cloudfront.net/img/480x360/162465.jpg',
];

const Slider = props => {
  const [imgs, setImages] = useState(imgs2);

  return (
    <div>
      <h4
        onClick={() => {
          setImages(imgs1);
        }}
      >
        Click to change images
      </h4>
      <TinySlider {...props}>
        {imgs.map((el, index) => (
          <div key={index} style={{ position: 'relative' }}>
            <img
              className={`tns-lazy-img`}
              src={loadingImage}
              data-src={el}
              alt=""
              style={imgStyles}
            />
          </div>
        ))}
      </TinySlider>
    </div>
  );
};
export default Slider;
