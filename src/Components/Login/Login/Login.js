import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../../App";
import { firebaseConfig } from './firebase.config';
import './Login.css';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const onSubmit = data => {
        console.log(data)
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email }
                setLoggedInUser(signedInUser)
                setAuthToken();
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    };
    const setAuthToken = () => {
        firebase.auth().currentUser.getIdToken(true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken)
                history.replace(from);
            })
            .catch(function (error) {
            });
    }
    return (
        <section>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-5">
                    <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
                        <h3 className='text-login'>Login</h3>
                        <br />
                        <input {...register("email", { required: true })} />
                        <br />
                        {errors.email && <span style={{ color: 'red' }}>This field is required*</span>}
                        <br />
                        <input {...register("password", { required: true })} />
                        <br />
                        {errors.password && <span style={{ color: 'red' }}>This field is required*</span>}
                        <br />
                        <input className='btn appointment-btn login-btn' type="submit" />
                    </form>
                </div>
                <div className="col-md-5 login-bg"></div>
            </div>
        </section>
    );
};

export default Login;