import React, { useState } from 'react';
import { CREATE_USER } from '../utils/mutations';
import { useStoreContext } from "../utils/GlobalState";
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../utils/actions';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function Signup(props) {
    let history = useHistory();
    const [formState, setFormState] = useState({
        email: '', password: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zipCode: ''
    });
    const [_, dispatch] = useStoreContext();
    const [signUp, { error }] = useMutation(CREATE_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const mutationResponse = await signUp({
                variables: { email: formState.email, password: formState.password, firstName: formState.firstName, lastName: formState.lastName, address: formState.address, city: formState.city, state: formState.state, zipCode: formState.zipCode },
            });
            const user = mutationResponse.data.createUser;

            dispatch({
                type: UPDATE_USER,
                user: {
                    ...user,
                    isLoggedIn: true,

                }
            });
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
            <h3 className="secondary-label mt-2">signup</h3>

            <form onSubmit={handleFormSubmit}>
                <div className="form-group m-0">
                    <input type="email" name="email" className="rounded form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleChange} />
                </div>
                <div className="form-group m-0 pt-3">
                    <input type="password" name="password" className="rounded form-control" id="exampleInputPassword1" placeholder="Password" onChange={handleChange} />
                </div>
                <div className="form-row m-0 pt-3">
                    <div className="form-group col-md-6 p-0">
                        <input name="firstName" className="rounded form-control" id="first-name" placeholder="First Name" onChange={handleChange} />
                    </div>
                    <div className="form-group col-md-6">
                        <input name="lastName" className="rounded form-control" id="last-name" placeholder="Last Name" onChange={handleChange} />
                    </div>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control rounded" name="address" id="inputAddress" placeholder="Enter Address" onChange={handleChange} />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control rounded" name="city" id="inputCity" placeholder="Enter City" onChange={handleChange} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control rounded" name="state" id="inputState" placeholder="Enter State" onChange={handleChange} />
                    </div>
                    <div className="form-group col-md-2">
                        <input type="text" className="form-control rounded" name="zipCode" id="inputZip" placeholder="Enter Zip" onChange={handleChange} />
                    </div>
                </div>


                <div className="form-group">
                    <div className="row">
                        <legend className="col-form-label col-sm-2 pt-0">I'm shopping for</legend>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                                <label className="form-check-label" for="gridRadios1">
                                    Men's Clothing
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                <label className="form-check-label" for="gridRadios2">
                                    Women's Clothing
                                </label>
                            </div>
                            <div className="form-check disabled">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled />
                                <label className="form-check-label" for="gridRadios3">
                                    Baby Clothing
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="centered">
                    <button type="submit" className="btn btn-dark btn-lg rounded pl-4 pr-4 signup-btn">Sign up</button>
                    <Link className="ml-4" to="/login">Already have an account? Click here to login</Link>
                </div>

            </form>
        </div>
    )
}

export default Signup;