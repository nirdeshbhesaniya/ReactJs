import {configureStore} from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import bagSlice from "./bagSlice";
import fetchStatusSlice from "./fetchStatusSlice";

const myntraStore = configureStore({
    reducer :{
        items : itemsSlice.reducer,
        fetchStatus : fetchStatusSlice.reducer,
        bag : bagSlice.reducer
    }
});

export default myntraStore;