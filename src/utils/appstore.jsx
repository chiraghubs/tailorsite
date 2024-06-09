import {configureStore} from "@reduxjs/toolkit"
import userSlice, { userStatus } from "./userSlice";
import userLoginSlice from "./userLoginSlice";
import cartSlice from "./cartSlice";


const appStore = configureStore(
    {
        reducer:{
          user:userSlice,
          login:userLoginSlice,
          cart:cartSlice
        }
    }
);

export default appStore;