// import React from 'react';
// import {Link} from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import {signOut} from '../../Controllers/redux/authSlice';
// import'./sidebar.css'

// export default()=>{
//     const dispatch =useDispatch();
//     const {auth} = useSelector(state=>state)

//     function signOut(){
//         dispatch(signOut());
//     }

//     return(
//         <div className='sidebar'>
//             <Link className='nav-link' to='/'><h1 className='brand'>BugBlitz</h1></Link>
//             <ul>
//                 <li><Link to='/' className='nav-link'>Dashboard</Link></li>
//                 <li><Link to='/viewBugs' className='nav-link'>View Bugs</Link></li>
//                 {auth.admin && <l1><Link to='/create' className='nav-link'>Create Bug</Link></l1>}
//             </ul>
//             <button className='nav-link logout' onClick={signOut}>Logout</button>

//         </div>
//     )
// }

import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../Controllers/Redux/authSlice';
import './sidebar.css';

export default function Sidebar() {
  const dispatch = useDispatch();
  const { auth } = useSelector(state => state);

  function SignOut() {
    dispatch(signOut());
  }

  return (
    <div className='sidebar'>
      <Link className='nav-link' to='/'>
        <h1 className='brand'>Bug Blitz</h1>
      </Link>
      <ul>
        <li>
          <Link to='/' className='nav-link'>Dashboard</Link>
        </li>
        <li>
          <Link to='/viewBugs' className='nav-link'>View Bugs</Link>
        </li>
        {auth.admin && 
          <li>
            <Link to='/create' className='nav-link'>Create Bug</Link>
          </li>
        }
      </ul>
      <button className='nav-link logout' onClick={SignOut}>Logout</button>
    </div>
  );
}
