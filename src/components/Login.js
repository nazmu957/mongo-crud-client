import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import app from '../firebase/firebase.init';


const Login = () => {
    const {signIn, signInWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState('');

    const auth = getAuth(app);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        console.log(email,password);
        signIn(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
             navigate('/')
        })
        .catch(error => console.error(error));
    }
    
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then( result => {
            const user = result.user;
            console.log(user);
            navigate('/')
        })
        .catch(error => console.error(error));
    }

    const handleEmailBlur = event => {
      const email = event.target.value;
      setUserEmail(email);
      console.log(email);
    }

    const handleForgetPassword = () => {
      if(!userEmail){
        alert('Please enter your email address')
        return;
      }
      sendPasswordResetEmail(auth, userEmail)
      .then( () => {
        alert('Password Reset email sent.Please check')
      })
      .catch(error => {
        console.error(error);
      })
      
    }
    return (
        <div className="hero mt-[3rem]">
  <div className="hero-content flex-col ">
      
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        
      <form onSubmit={handleLogin} className="card-body">
          <h1 className='text-center font-bold text-2xl'>Please Login</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input onBlur={handleEmailBlur} type="email" name="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" />

          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Login"/>
            <button onClick={handleForgetPassword} className="btn btn-outline btn-success mt-3">Forgot Password</button>
        </div>

          <label className="label">
             <p>New in our site?<Link to='/register' className="label-text-alt link link-hover text-sm text-blue-500 font-bold">Create Account</Link></p>
          </label>
          

          <div className='mt-3' onClick={handleGoogleSignIn}>
              <button> <img className='w-10 rounded-full ml-[0rem] ' src="https://e7.pngegg.com/pngimages/337/722/png-clipart-google-search-google-account-google-s-google-play-google-company-text.png" alt="" /></button>
          </div>
         
        </div>

       
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;