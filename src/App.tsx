import React from 'react';
import Header from './components/Header/Header';
import Toolbar from './components/Toolbar/Toolbar';
import Content from './components/Content/Content';
import './App.scss';

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Header />
        <div className="app__main">
          <div className="app__toolbar">
            <Toolbar />
          </div>
          <div className="app__content">
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
