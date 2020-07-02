import React from 'react';
import Form from './components/Form';
import Output from './components/Output';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Form />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Output />
        </div>
      </div>
    </div>
  );
};

export default App;