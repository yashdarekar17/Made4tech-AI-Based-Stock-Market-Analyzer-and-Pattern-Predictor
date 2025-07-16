import { createSlice } from '@reduxjs/toolkit';

const Followslice = createSlice({
    name: 'follow',
    initialState:{
       followedstocks:[]
    },
    reducers:{
       followStock: (state , action) =>{
        const alreadyExists = state.followedstocks.some(
            stock => stock.stock === action.payload.stock
        );
        if(!alreadyExists){
            state.followedstocks.push(action.payload);
        }
       },

       unfollowedStock: (state,action) =>{
        state.followedstocks = state.followedstocks.filter(
            stock => stock.stock !== action.payload.stock
        )
       },
    }
})

export const {followStock,unfollowedStock} = Followslice.actions
export default Followslice.reducer;