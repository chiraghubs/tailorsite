import{createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        item:[],
        cartTotalQuantity:0,
        cartTotalAmount:0
    },
    reducers:{
        additem: (state,action)=>{
          const itemindex=state.item.findIndex((x)=>x.id===action.payload.id);
          if(itemindex>=0){
            state.item[itemindex].cartQuantity += 1
            } else {
              
              const temproduct = {...action.payload,cartQuantity:1}
            state.item.push(temproduct) 
          }
        },
        decreaseitem: (state,action)=>{
          const itemindex=state.item.findIndex((x)=>x.id===action.payload.id);
          if(state.item[itemindex].cartQuantity>1){
            state.item[itemindex].cartQuantity-=1
            
            } else {
              console.log("hi");
              state.item = state.item.filter((x) => x.id !== action.payload.id) 
          }
        },
        removeitem: (state,action)=>{
          state.item = state.item.filter((x) => x.id !== action.payload.id) 
        },
        clearcart: (state,action)=>{
          state.item.length = 0 
        },
       
    }
});

export const {additem,removeitem,clearcart,decreaseitem} = cartSlice.actions;
export default cartSlice.reducer;