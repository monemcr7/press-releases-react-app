import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainApplicationLayout from "./Layouts/MainApplication/MainApplication";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/LinkedStandard/LinkedStandard.scss';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <MainApplicationLayout />
        </div>
      </BrowserRouter>
  );
}

export default App;
