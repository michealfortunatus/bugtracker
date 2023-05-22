// import{createSlice} from '@reduxjs/toolkit'

// const slice = createSlice({
//     name:'auth',
//     initialState:{
//         admin:false,
//         LoggedIn:false,
//     },
//     reducers:{
//         signIn(state,action)=>{
//             const{name,password}= action.payload;
//             state.LoggedIn=true;
//             state.admin=true;

//         },
//         signOut:(state)=>{
//             state.LoggedIn = false;
//             state.admin=false;

//         },
//         createUser;(state,action)=>{

//         }
//     }
// })
// export default slice.reducer;

// export const{signIn,signOut,createUser}= slice.actions;

import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'auth',
    initialState: {
        admin: false,
        loggedIn: false,
    },
    reducers: {
        signIn: (state, action) => {
            const { name, password } = action.payload;
            state.loggedIn = true;
            state.admin = true;
            
        },
        signOut: (state) => {
            state.loggedIn = false;
            state.admin = false;
        },
        createUser: (state, action) => {
            // Add your logic for creating a user here
        },
    },
});

export default slice.reducer;

export const { signIn, signOut, createUser } = slice.actions;
