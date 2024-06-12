// src/components/Header.js

import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Basic Host-Remote</h1>
    </header>
  );
};

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100%',
};

export default Header;
