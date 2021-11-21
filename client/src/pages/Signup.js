import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

// import Auth from '../server/utils/auth';
// import { ADD_USER } from '../server/utils/mutations';

function Signup(props) {
    const [formState, setFormState] = useState({ email: '', password: '',
    firstName: '',
    lastName: '',
    address: '',
    state: '',
    zipCode: '' });

    // const [addUser] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        // const mutationResponse = await addUser({
        //   variables: {
        //     email: formState.email,
        //     password: formState.password,
        //     firstName: formState.firstName,
        //     lastName: formState.lastName,
        //     address: formState.address,
        //     state: formState.state,
        //     zipCode: formState.zipCode
        //   },
        // });
        // console.log("after mute")
        // const token = mutationResponse.data.addUser.token;
        // Auth.login(token);
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
                    <input type="email" className="rounded form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  onChange={handleChange}/>
                </div>
                <div className="form-group m-0 pt-3">
                    <input type="password" className="rounded form-control" id="exampleInputPassword1" placeholder="Password" onChange={handleChange} />
                </div>
                <div className="form-row m-0 pt-3">
                    <div className="form-group col-md-6 p-0">
                        <input type="firstName" className="rounded form-control" id="first-name" placeholder="First Name" onChange={handleChange} />
                    </div>
                    <div className="form-group col-md-6">
                        <input type="lastName" className="rounded form-control" id="last-name" placeholder="Last Name" onChange={handleChange} />
                    </div>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control rounded" id="inputAddress" placeholder="Enter Address" onChange={handleChange} />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control rounded" id="inputCity" placeholder="Enter City" onChange={handleChange} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control rounded" id="inputState" placeholder="Enter State" onChange={handleChange} />
                    </div>
                    <div className="form-group col-md-2">
                        <input type="text" className="form-control rounded" id="inputZip" placeholder="Enter Zip" onChange={handleChange} />
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
                    <a className="ml-4" href="/login">Already have an account? Click here to login</a>
                </div>
                
            </form>
        </div>
    )
}

export default Signup;