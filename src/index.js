import React from 'react';
import ReactDOM from 'react-dom';
import ChristmasTree from './ChristmasTree';
// import './index.css';

ReactDOM.render(
  <ChristmasTree count={25} />,
  document.getElementById('react-container')
);
