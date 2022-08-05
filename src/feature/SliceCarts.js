import { createSlice } from "@reduxjs/toolkit";


const CarsModule = [{
      url:"#model_S" ,
     name:"model S"} 
     ,{
    url:"#model_3" ,
     name:"model 3",
     }
     ,{
    url:"#model_Y" ,
     name:"model Y",
     }
     ,{
    url:"#model_X" ,
     name:"model X",
     }]

const CartSlice   = createSlice({
    name:'car',
    initialState: CarsModule,
    reducers: {}
})


export const carState = CartSlice.reducer;