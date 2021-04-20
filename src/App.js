import React from 'react';

import Header from './components/Header';
import Chat from './components/Chat';

import './App.css';
import ChatFormik from './components/Chat copy';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Chat /> */}
      <ChatFormik />
    </div>
  );
}

export default App;
