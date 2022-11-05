import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


// Operations
axios.defaults.baseURL = 'https://connections-api.herokuapp.com'
// const BASE_URL = 'https://connections-api.herokuapp.com'


export const register = createAsyncThunk('auth/register',
    async credentials => { 
    console.log(credentials);
        try {
            const { data } = await axios.post('/users/signup', credentials);
            console.log(data);
            return data
        } catch (error) {
            // console.log(error)
        }
})




// Reducers
const initialState = {
    num: 0,
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
     
     },
     extraReducers: {
         [register.fulfilled]: (state, action) => { 
             console.log(action);
            state.num = state.num + 1
         }
     }
})

// export const { test } = authSlice.actions
export default authSlice.reducer

// Selectors
// export const getIsLoggedIn = state => state.auth.isLoggedIn;
// export const getUsername = state => state.auth.user.name;
