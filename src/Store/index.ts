import { configureStore } from "@reduxjs/toolkit";
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query';
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import UserSlice from "./UserSlice";

const Store = configureStore({
    reducer:{
        user: UserSlice.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat()
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default Store;