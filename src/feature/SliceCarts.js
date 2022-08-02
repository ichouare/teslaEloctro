import { createSlice } from "@reduxjs/toolkit";


const CarsModule = ["model S" ,"model 3" ,"model Y" , "model X"]

const CartSlice   = createSlice({
    name:'car',
    initialState: CarsModule,
    reducers: {}
})


export const carState = CartSlice.reducer;