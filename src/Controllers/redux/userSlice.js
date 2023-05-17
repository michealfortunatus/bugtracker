import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name:"user",
    initialState:[{}],
    reducers:{
        getUser:(state)=>{
            state.push({name:"micheal"})
            state.push({name:'fortune'})
        }
    }
})

export default slice.reducer;
export const{getUser}=slice.actions;