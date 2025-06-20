import React from 'react';

const WaveDivider = ({ color = '#F8D7DA', flip = false }) => (
  <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0 }}>
    <svg
      viewBox="0 0 1440 82"
      width="100%"
      height="82"
      style={{ display: 'block', transform: flip ? 'scaleY(-1)' : 'none', marginBottom: '-2px' }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,40 C360,80 1080,0 1440,40 L1440,82 L0,82 Z"
        fill={color}
      />
    </svg>
  </div>
);

export default WaveDivider; 