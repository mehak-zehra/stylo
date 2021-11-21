import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
// import { LOGIN } from '../server/utils/mutations';
// import Auth from '../server/utils/auth';

function Login(props) {
    
    const [formState, setFormState] = useState({ email: '', password: '' });
    // const [login, { error }] = useMutation(LOGIN);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        // try {
        //     const mutationResponse = await login({
        //         variables: { email: formState.email, password: formState.password },
        //     });
        //     const token = mutationResponse.data.login.token;
        //     Auth.login(token);
        // } catch (e) {
        //     console.log(e);
        // }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // function handleSubmit() {
    //     console.log()
    // }

    return (
        <div className="page container">
            <h3 className="secondary-label mt-2">login</h3>

            <form onSubmit={handleFormSubmit}>
                <div className="form-group m-0 col-md-6 p-0">
                    <input type="email" className="rounded form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleChange} />
                </div>
                <div className="form-group m-0 col-md-6 p-0 pt-3">
                    <input type="password" className="rounded form-control" id="exampleInputPassword1" placeholder="Password" onChange={handleChange} />
                </div>
                {/* {error ? (
                    <div>
                        <p className="error-text">The provided credentials are incorrect</p>
                    </div>
                ) : null} */}

                <div className="centered mt-3">
                    <button type="submit" className="btn btn-dark btn-lg rounded pl-4 pr-4 login-btn">Login </button>
                    <a className="ml-4" href="/signup">Don't have an account? Click here to Signup</a>
                </div>

            </form>
        </div>
    )
}

export default Login;