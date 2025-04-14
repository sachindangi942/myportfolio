import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react';
import Store from './redux/Store';
import { persister } from './redux/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <PersistGate loading = {null} persistor={persister}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>

  </Provider>

);
reportWebVitals();
