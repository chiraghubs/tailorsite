import{createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        item:[]
    },
    reducers:{
        additem: (state,action)=>{
          state.item.push(action.payload) 
        },
        removeitem: (state,action)=>{
          state.item.pop() 
        },
        clearcart: (state,action)=>{
          state.item.length = 0 
        },
       
    }
});

export const {additem,removeitem,clearcart} = cartSlice.actions;
export default cartSlice.reducer;