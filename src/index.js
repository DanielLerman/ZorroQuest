import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App';
import "./style/index.css"
import { AppContext, Provider } from "./context/AppContext";

  import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider>
    <App />
      </Provider>

);
