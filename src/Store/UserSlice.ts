import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from ".";

const initialState = {
    currentSong: -1,
    favList: [] ,
    playing: false,
    nextSong: -1
}

const UserSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers:{
        
    }
})

export const userActions = UserSlice.actions;
export default UserSlice;
