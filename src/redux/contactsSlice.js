import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

// Operations
axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    const { data } = await axios.get('/contacts');
    return data;
  }
)

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact) => { 
    console.log(contact);
    const { data } = await axios.post('/contacts', contact);
    return data;
  }
)

const BASE_URL = 'https://635acc94aa7c3f113dafba06.mockapi.io/api/v1/'

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id) => { 
    const { data } = await axios.delete(`${BASE_URL}/contacts/${id}`);
    return data;
  }
)
 const contactsSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      isAdding: false,
      error: null
    },
    filter: ""
},
  
  reducers: {
    setFilter(state, action) { 
      state.filter = action.payload
    }
   },
   extraReducers: {
     [fetchContacts.pending]: (state) => {
        state.isLoading = true;
    },
     [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.contacts.items = [...action.payload];
     },
    [fetchContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
     },
     [addContact.pending]: (state) => { 
        state.isAdding = true;
     },
     [addContact.fulfilled]: (state, action) => {
      console.log(action);
      state.isAdding = false;
      state.error = null;
      state.contacts.items = [...state.contacts.items, action.payload];
     },
     [addContact.rejected]: (state, action) => {
      console.log(action);
      state.isAdding = false;
      state.error = action.error.message;
     },
    [deleteContact.pending]: (state) => { 
        state.isLoading = true;
     },
    [deleteContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload.id);
     },
    [deleteContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
     },
  },
})

export const { setFilter } = contactsSlice.actions
export default contactsSlice.reducer

// Selectors
export const getContacts = state => state.phonebook.contacts.items;
export const getFilter = state => state.phonebook.filter;
export const isLoading = state => state.phonebook.isLoading;
export const isAdding = state => state.phonebook.isAdding;
export const errorMessage = state => state.phonebook.error;


