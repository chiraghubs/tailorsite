import{createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name:"user",
    initialState:{
        islogin:true
    },
    reducers:{
        userStatus: (state,action)=>{
          state.islogin = !state.islogin
          
        },
       
    }
});

export const {userStatus} = userSlice.actions;
export default userSlice.reducer;