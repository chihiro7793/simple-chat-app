import ChatShell from './chatApp/chat-shell/Chat-Shell';
import Login from './chatApp/chat-login/Login';
// import { Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
import React from 'react';
import './App.css';


const App = ({ user }) => {

  return (
    <>
      {!user ? (
        <Login></Login>
      ) : (
          <>
            <div className='appHead'></div>
            <div className='app'>
              <ChatShell />
            </div>
          </>
        )

      }
    </>

  );
}

const mapStateToProps = state => {
  return {
    user: state.applicationReducer.user
  }
}
export default connect(
  mapStateToProps
)(App);
