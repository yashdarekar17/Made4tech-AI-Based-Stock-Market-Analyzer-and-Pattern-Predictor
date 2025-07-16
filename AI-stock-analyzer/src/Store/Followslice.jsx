import { createSlice } from '@reduxjs/toolkit';

const savedfollowstocks = JSON.parse(localStorage.getItem("followedstocks")) || [];

const Followslice = createSlice({
    name: 'follow',
    initialState:{
       followedstocks:savedfollowstocks
    },
    reducers:{
       followStock: (state , action) =>{
        const alreadyExists = state.followedstocks.some(
            stock => stock.stock === action.payload.stock
        );
        if(!alreadyExists){
            state.followedstocks.push(action.payload);
            localStorage.setItem("followedstocks",JSON.stringify(state.followedstocks))
        }
       },

       unfollowedStock: (state,action) =>{
        state.followedstocks = state.followedstocks.filter(
            stock => stock.stock !== action.payload.stock
        )
         localStorage.setItem("followedstocks",JSON.stringify(state.followedstocks))
       },


    }
})

export const {followStock,unfollowedStock} = Followslice.actions
export default Followslice.reducer;