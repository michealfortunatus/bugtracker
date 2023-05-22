// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import {Provider} from 'react-redux';
// import{configureStore,combineReducers} from '@reduxjs/toolkit';
// import App from './App';

// // Reducers
// import authReducer from './Controllers/redux/authSlice';
// import bugReducer from './Controllers/redux/bugSlice';
// import userReducer from './Controllers/redux/userSlice';

// // Redux Configure
// const reducer =combineReducers({
//   auth:authReducer,
//   bugs:bugReducer,
//   user:userReducer,
// })
// const store = configureStore({
//   reducer
// })

// ReactDOM.render {
//   <Provider>
//    <App/>
//   </Provider>,
//   document.getElementById('root')
// };

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import App from './App';

// Reducers
import authReducer from './Controllers/Redux/authSlice';
import bugReducer from './Controllers/Redux/bugSlice';
import userReducer from './Controllers/Redux/userSlice';

// Redux Configure
const reducer = combineReducers({
  auth: authReducer,
  bug: bugReducer,
  user: userReducer,
});

const store = configureStore({
  reducer
});

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);



