import './Login.css'
import React from 'react';
import { auth } from '../../services/firebase';
import { useState } from 'react';
import { setUser } from '../../actions/actions';
import { connect } from 'react-redux';


function Login(
    {
        getUser
    }
) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const signIn = () => {
        auth.createUserWithEmailAndPassword(username, password)
            .then((user) => {
                getUser(user);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <section className="form animated flipInX">
            <h2>Login To Your Account</h2>
            <p className="valid">Valid. Please wait a moment.</p>
            <p className="error">Error. Please enter correct Username &amp; password.</p>
            <div className="loginbox">
                <input placeholder="Username" value={username} type="text" onChange={(e) => setUsername(e.target.value)}></input>
                <input placeholder="Password" value={password} type="password" onChange={(e) => setPassword(e.target.value)}></input>
                <button onClick={signIn}>Login</button>
            </div>
        </section>
    )
}

const mapDispatchToProps = dispatch => {

    return {
        getUser: (user) => dispatch(setUser(user)),
    }
}

const mapStateToProps = state => {
    return state;
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(Login);

