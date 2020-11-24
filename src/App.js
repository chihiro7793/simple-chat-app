import React from 'react';
import './App.css';
import ChatShell from './chatApp/chat-shell/Chat-Shell';

function App() {
  return (
    <div>
      <div className='appHead'></div>
      <div className='app'>
        <ChatShell />
      </div>
    </div>

  );
}

export default App;
