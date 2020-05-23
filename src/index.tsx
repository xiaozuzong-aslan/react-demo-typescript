import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

if(window.screen.width>450){
  window.alert('请用手机端打开此网页，确保体验效果')
  const img = document.createElement('img')
  img.src = require('./icons/qrCode.png')
  img.style.position = 'fixed'
  img.style.left = '50%'
  img.style.top = '50%'
  img.style.width = '300px'
  img.style.transform = 'translate(-50%,-50%)'
  img.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)'
  document.body.appendChild(img)
}

serviceWorker.unregister();
