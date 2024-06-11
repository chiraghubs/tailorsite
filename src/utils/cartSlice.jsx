import{createSlice} from "@reduxjs/toolkit"
import { toast } from "react-toastify";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        item:localStorage.getItem("cartitem")? JSON.parse(localStorage.getItem("cartitem")):[],
        cartTotalQuantity:0,
        cartTotalAmount:0
    },
    reducers:{
        additem: (state,action)=>{
          const itemindex=state.item.findIndex((x)=>x.id===action.payload.id);
          if(itemindex>=0){
            state.item[itemindex].cartQuantity += 1
            toast.info(`${action.payload.name} Qty added`,{position:"bottom-left"})
            } else {
              
              const temproduct = {...action.payload,cartQuantity:1}
              state.item.push(temproduct) 
              toast.success(`${action.payload.name} added`,{position:"bottom-left"})
          }
          localStorage.setItem("cartitem",JSON.stringify(state.item))
        },
        decreaseitem: (state,action)=>{
          const itemindex=state.item.findIndex((x)=>x.id===action.payload.id);
          if(state.item[itemindex].cartQuantity>1){
            state.item[itemindex].cartQuantity-=1
            toast.info(`${action.payload.name} remove`,{position:"bottom-left"})
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