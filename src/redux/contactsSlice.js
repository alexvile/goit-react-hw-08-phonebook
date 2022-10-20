import { createSlice } from "@reduxjs/toolkit";

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: ""
},
  
  reducers: {
    add(state, action) { 
      state.contacts.push(action.payload)
    }, 
    remove(state, action) {
      return { ...state, contacts: state.contacts.filter(contact => contact.id !== action.payload) }
    },
    setFilter(state, action) { 
      state.filter = action.payload
    }
  }
})

// // Action creators are generated for each case reducer function
export const { add, remove, setFilter } = contactsSlice.actions

// export default contactsSlice.reducer