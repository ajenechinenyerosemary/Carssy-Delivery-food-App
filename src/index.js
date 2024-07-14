// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';
// import StoreContextProvider from './components/Context/StoreContext';

// const root = document.getElementById('root');

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <StoreContextProvider>
//         <App />
//       </StoreContextProvider>
//     </BrowserRouter>
//   </React.StrictMode>,
//   root
// );

// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import StoreContextProvider from './components/Context/StoreContext';

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  root
);

reportWebVitals();

