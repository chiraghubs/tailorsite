import { createSlice } from "@reduxjs/toolkit";

const userLogin = createSlice({
    name:"LoginData",
    initialState: null,
    reducers:{
        addUser: (state,action)=>{
            return  action.payload
        },
        removeUser: (state,action)=>{
            return null
        }
    }
});

export const {addUser,removeUser} = userLogin.actions
export default userLogin.reducer;