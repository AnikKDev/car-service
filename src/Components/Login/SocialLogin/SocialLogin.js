import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    if (user || user1) {
        navigate('/')
    }
    const handleSignInWithGoogle = () => {
        signInWithGoogle();
    };
    const handleGitHubSignIn = () => {
        signInWithGithub();
    };


    return (
        <div>
            {error && <p className="text-danger">{error.message}</p>}
            {error1 && <p className="text-danger">{error1.message}</p>}
            <Button onClick={handleSignInWithGoogle} className="bg-light text-dark border-none">
                <img style={{ width: "20px" }} className="me-2" src='https://image.similarpng.com/thumbnail/2020/12/Flat-design-Google-logo-design-Vector-PNG.png' alt="" /> Google Sign In</Button>
            <Button onClick={handleGitHubSignIn} className="bg-light text-dark border-none">
                <img style={{ width: "20px" }} className="me-2" src='https://flyclipart.com/thumb2/github-png-icon-free-download-813498.png' alt="" /> Github Sign In</Button>
        </div>
    );
};

export default SocialLogin;