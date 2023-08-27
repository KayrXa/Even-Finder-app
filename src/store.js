import {configureStore} from '@reduxjs/toolkit';
import eventreducer from './slicers/eventslice';
import userreducer from './slicers/userslice';

export default configureStore({
    reducer:{
        eventreducer,
        userreducer
    }
})