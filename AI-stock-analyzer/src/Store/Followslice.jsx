import { createSlice } from '@reduxjs/toolkit';

const savedfollowstocks = JSON.parse(localStorage.getItem("followedstocks")) || [];
const savedNotifications = JSON.parse(localStorage.getItem("notifications")) || 0;

const Followslice = createSlice({
    name: 'follow',
    initialState:{
       followedstocks:savedfollowstocks,
       notifications:savedNotifications

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

       changenotfications: (state)=>{
         state.notifications = 0;
         localStorage.setItem("notifications",0);
       }


    }
})

export const {followStock,unfollowedStock,changenotfications} = Followslice.actions
export default Followslice.reducer;