import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

window.addEventListener('message', event => {
  // IMPORTANT: check the origin of the data! 
  if (event.origin.startsWith('https://nachodiaz8.com')) { 
      // The data was sent from your site.
      // Data sent with postMessage is stored in event.data:
      console.log(event.data); 
  } else {
      // The data was NOT sent from your site! 
      // Be careful! Do not use it. This else branch is
      // here just for clarity, you usually shouldn't need it.
      return; 
  } 
}); 
// if (module.hot && process.env.NODE_ENV==="development") {
//   module.hot.accept();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
