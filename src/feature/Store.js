import { configureStore } from "@reduxjs/toolkit";
import {carState} from "./SliceCarts"


const Store = configureStore({
    reducer:{
carState,
    }
})

export default Store