import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import { getAuth, sendEmailVerification } from 'firebase/auth';
import app from '../firebase/firebase.init';

const Register = () => {

    const {createUser} = useContext(AuthContext);
    console.log('createUser', createUser);

    const auth = getAuth(app);


    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email,password,confirm);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log('registered user', user);
            form.reset();
            verifyEmail();
        })
        .catch( error => {
            console.error(error)
        })

        const verifyEmail = () => {
          sendEmailVerification(auth.currentUser)
          .then( () => {
            alert('Please check your email and verify');
          })

        }

    }
    return (
        <div className="hero ">
        <div className="hero-content flex-col ">
            
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              
            <form onSubmit={handleSignUp} className="card-body">
                <h1 className='text-center font-bold'>SignUp</h1>
                
                
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" name="confirm" placeholder="confirm password" className="input input-bordered" required/>
                <label className="label">
                  <p>Already have an account?<Link to='/login' className="label-text-alt link link-hover text-sm text-blue-500 font-bold">Please Login</Link></p>
                  
                </label>
                  <p className='text-center text-red-400'>{}</p>
              </div>
              <div className="form-control mt-6">
                  <input className="btn btn-primary" type="submit" value="SignUp"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;