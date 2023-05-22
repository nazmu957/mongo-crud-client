import React, { useContext } from 'react';

// import { AuthContext } from '../contexts/UserContext';

const ForgotPassword = () => {
    // const {reset, sendPasswordResetEmail} = useContext(AuthContext);

    
    const handleReset = event => {
        event.preventDefault();
        const form = event.target;
         const email = form.email.value;
        console.log(email);
    }  
    return (
        <div className="hero mt-[5rem]">
        <div className="hero-content flex-col ">
            
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              
            <form onClick={handleReset} className="card-body">
                <h1 className='text-center font-bold'>Please Reset</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" />
              </div>
             
      
              <div className="form-control mt-6">
                  <input className="btn btn-primary" type="submit" value="Reset"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default ForgotPassword;