import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_USER } from '../utils/actions';
import { useHistory } from 'react-router-dom';

function Login(props) {

    const [_, dispatch] = useStoreContext();
    let history = useHistory();

    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const mutationResponse = await login({
                variables: { email: formState.email, password: formState.password },
            });
            const user = mutationResponse.data.login;
            console.log(user)

            dispatch({
                type: UPDATE_USER,
                user: {
                    ...user,
                    isLoggedIn: true,
                }
            })
            history.push('/home')

        } catch (e) {
            console.log(e);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div className="page container">
            <h3 className="secondary-label mt-2">login</h3>

            <form onSubmit={handleFormSubmit}>
                <div className="form-group m-0 col-md-6 p-0">
                    <input type="email" name="email" className="rounded form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleChange} />
                </div>
                <div className="form-group m-0 col-md-6 p-0 pt-3">
                    <input type="password" name="password" className="rounded form-control" id="exampleInputPassword1" placeholder="Password" onChange={handleChange} />
                </div>
                {error ? (
                    <div>
                        <p className="error-text">The provided credentials are incorrect</p>
                    </div>
                ) : null}

                <div className="centered mt-3">
                    <button type="submit" className="btn btn-dark btn-lg rounded pl-4 pr-4 login-btn">Login </button>
                    <Link className="ml-4" to="/signup">Don't have an account? Click here to Signup</Link>
                </div>

            </form>
        </div>
    )
}

export default Login;