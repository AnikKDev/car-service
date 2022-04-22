import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Signup = () => {
    const navigate = useNavigate();
    const mailRef = useRef('');
    const passRef = useRef('');
    const nameRef = useRef('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {emailVerification: true});

    if (user) {
        navigate('/')
    }
    const [agree, setAgree] = useState(false);
    // console.log(agree);
    const handleSignup = e => {
        e.preventDefault();
        const email = mailRef.current.value;
        const password = passRef.current.value;
        const name = nameRef.current.value;

        // console.log(email, password, name);

        if (agree) {
            createUserWithEmailAndPassword(email, password);
        }
    };



    return (
        <div className='w-25 mx-auto'>
            <h3>Please sign up</h3>

            <Form onSubmit={handleSignup}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={mailRef} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group onClick={() => setAgree(!agree)} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check className={agree && 'text-success'} type="checkbox" label="Check me out" />
                </Form.Group>
                {/* <Button disabled={agree ? false : true} variant="primary" type="submit">
                    Signup
                </Button> */}
                <Button disabled={!agree} variant="primary" type="submit">
                    Signup
                </Button>
            </Form>
            <p>Already have an account? <Link to="/login">Log in</Link></p>
        </div>
    );
};

export default Signup;