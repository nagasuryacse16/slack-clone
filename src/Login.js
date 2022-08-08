import { Button } from '@mui/material';
import React from 'react';
import { auth, provider } from './firebase';
import './Login.css';
import { useStateValue } from './StateProvider';

function Login() {
    const [state, dispatch] =useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            console.log(result);

            dispatch({
                type: "SET_USER",
                user: result.user, 
            })
        })
        .catch((error) => {
            alert(error.message);
        })
    }

    return ( 
        <div className='login'>
            <div className='login__container'>
                <img src='https://launchpad.syr.edu/wp-content/uploads/2021/09/Slack-logo.jpg'
                     alt='Slack'/>
                <h1>Sign in to Royal Challengers</h1>
                <p>royalchallengers.slack.com</p>
                <Button onClick={signIn}>Sign In with Google</Button>     
            </div>
        </div>
     );
}

export default Login;