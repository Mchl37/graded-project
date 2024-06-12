// src/Subtitle.js

import React from 'react';

const Subtitle = ({ text, icon }) => {
  return (
    <h2>
      {icon} {text}
    </h2>
  );
};

export default Subtitle;
