import {configureStore} from "@reduxjs/toolkit"
import userSlice, { userStatus } from "./userSlice";
import userLoginSlice from "./userLoginSlice";


const appStore = configureStore(
    {
        reducer:{
          user:userSlice,
          login:userLoginSlice 
        }
    }
);

export default appStore;