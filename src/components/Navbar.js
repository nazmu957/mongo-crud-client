import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext)
  console.log('context',user);


  const handleSignOut = () => {
      logOut()
      .then(() => { })
      .catch(error => console.error(error));
  }
    return (
        <div>
            <div className="navbar bg-sky-200">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">TecCourses</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      
      <li className='font-bold'><Link to="/">Home</Link></li>
      
      <li tabIndex={0}>
        <a className='font-bold'>
          Tec Course
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><a>Web Course </a></li>
          <li><a>Mobile Course   </a></li>
        </ul>
      </li>
      <li className='font-bold'><a>New Course</a></li>
      
      <li className='font-bold'><Link to="/register">Register</Link></li>
      

      
      <li className='font-bold'>{user?.email && <span>{user.email}</span> }</li>
      {
        user?.email ?
        <li className='font-bold'><button onClick={handleSignOut}>Logout</button></li>
        :       <li className='font-bold'><Link to="/login">Login</Link></li>
      }
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;