import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Firebase.config';
import login from "../../../images/login.jpg"

firebase.initializeApp(firebaseConfig);

const Login = () => {

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((res) => {
                console.log(res);
                /** @type {firebase.auth.OAuthCredential} */
                var credential = res.credential;

                var token = credential.accessToken;
                var user = res.user;
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
        console.log('sign in clicked');
    }

    return (
        <div className="row container offset-md-1 d-flex justify-content-center">
            <div className="col-md-6">
                <img src={login} alt="" />
            </div>
            <div className="col-md-6 mt-5 align-center">
                <h3 className="text-warning">Log in Here</h3>
                <button onClick={handleSignIn} className="btn btn-outline-warning" type="button">Google Sign In</button>

            </div>
        </div>
    );
};

export default Login;