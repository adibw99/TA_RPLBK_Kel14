import React, { useState } from 'react';
import './App.css';
import Detail from './Komponen/detail';

function App() {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (
    <div className="App">
      <header className="App-header">
        <h2>Daftar Makanan Khas Pati</h2>
        <Detail />
      </header>
    </div>
  );
}

export default App;
