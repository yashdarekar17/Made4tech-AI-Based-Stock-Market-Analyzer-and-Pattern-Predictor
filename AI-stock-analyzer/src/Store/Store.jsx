import {configureStore } from '@reduxjs/toolkit';
import Followreducer from './Followslice';

export const store = configureStore({
    reducer:{
        follow:Followreducer,
    }
})


