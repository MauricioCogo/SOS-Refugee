import React from 'react';
import "./App.css";
import { RouterConfig } from "./router/RouterConfig";
import { BrowserRouter } from "react-router-dom";
import 'leaflet/dist/leaflet.css';

function App() {

  return (
    <>
      <div className="">
        <BrowserRouter>
          <RouterConfig />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
