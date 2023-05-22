// import React, {usestate} from 'react'
// import {useDispatch} from 'react-redux'
// import './login.css'
// import {signIn} from'../../../../Controllers/redux/authSlice'

// export default = () => {
//   const dispatch = useDispatch();
//   const[formInput, SetFormInput] = usestate({
//     name:"",
//     password:""
//   })

//   function inputChanged(e){
//     SetFormInput({
//       ...formInput,
//       [e.target.name]:e.target.value
//     })
//   }

//   function submit(e){
//     dispatch(signIn(formInput));
//     e.preventDefault();
//   }
//   return (
//     <div className='loginBG'>
//         <form className='login-panel'>
//             <h1>login:</h1>
//             <input name = 'name' placeholder='Name' onchange ={inputChanged} value={formInput.name}></input>
//             <input name = 'password' type='password' placeholder='password' onchange ={inputChanged} value={formInput.password}></input>
//             <button type='submit' onClick={submit}>Login</button>

//         </form>
//     </div>
//   )
// }

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import './login.css';
// import { signIn } from '../../../Controllers/redux/authSlice';

// export default function Login() {
//   const dispatch = useDispatch();
//   const [formInput, setFormInput] = useState({
//     name: "",
//     password: "",
//     email:""
//   });

  
  

//   function inputChanged(e) {
//     setFormInput({
//       ...formInput,
//       [e.target.name]: e.target.value
//     });
//   }

//   function submit(e) {
//     dispatch(signIn(formInput));
//     e.preventDefault();
//   }

//   return (
//     <div className='loginBG'>
//       <form className='login-panel'>
//         <h1>Bug Blitz</h1>
//         <input name='name' placeholder='Name' onChange={inputChanged} value={formInput.name}></input>
//         <input name='password' type='password' placeholder='Password' onChange={inputChanged} value={formInput.password}></input>
//         <input name='email' type='email' placeholder='Email' onChange={inputChanged} value={formInput.email}></input>
//         <button type='submit' onClick={submit}>Login</button>
//       </form>
//     </div>
//   );
// }


// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import './login.css';
// import { signIn } from '../../../Controllers/redux/authSlice';

// export default function Login() {
//   const dispatch = useDispatch();
//   const [formInput, setFormInput] = useState({
//     name: '',
//     password: ''
//   });

//   function inputChanged(e) {
//     setFormInput({
//       ...formInput,
//       [e.target.name]: e.target.value
//     });
//   }

//   function submit(e) {
//     e.preventDefault();
//     dispatch(signIn(formInput));
//     e.preventDefault();
//   }

//   return (
//     <div className='loginBG'>
//       <form className='login-panel' onSubmit={submit}>
//         <h1>Bug Blitz</h1>
//         <input
//           name='name'
//           placeholder='Name'
//           onChange={inputChanged}
//           value={formInput.name}
//         />
//         <input
//           name='password'
//           type='password'
//           placeholder='Password'
//           onChange={inputChanged}
//           value={formInput.password}
//         />
//         <button type='submit' onClick={submit}>Login</button>
//       </form>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './login.css';
import { signIn } from '../../../Controllers/Redux/authSlice';

export default function Login() {
  const dispatch = useDispatch();
  // const { loggedIn } = useSelector((state) => state.auth);
  const [formInput, setFormInput] = useState({
    name: '',
    password: ''
  });

  function inputChanged(e) {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value
    });
  }

  // function submit(e) {
  //   e.preventDefault();
  //   const { name, password } = formInput;
  //   dispatch(signIn(name, password));
  //   e.preventDefault();
  // }

  // function submit(e) {
  //   e.preventDefault();
  //   const { name, password } = formInput;
  //   dispatch(signIn(name, password));
  // }
  function submit(e){
    dispatch(signIn(formInput));
    e.preventDefault();

  }
  // if (loggedIn) {
  //   // Redirect to authenticated page
  //   return <Redirect to="/Dashboard" />;
  // }
  

  return (
    <div className='loginBG'>
      <form className='login-panel' onSubmit={submit}>
        <h1>Bug Blitz</h1>
        <input
          name='name'
          placeholder='Name'
          onChange={inputChanged}
          value={formInput.name}
        />
        <input
          name='password'
          type='password'
          placeholder='Password'
          onChange={inputChanged}
          value={formInput.password}
        />
        <button type='submit' onClick={submit}>Login</button>
        console.log(submit);
        
      </form>
    </div>
  );
}
