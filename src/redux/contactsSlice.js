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
    delete1(state, action) {
      state.contacts.filter(contact => contact.id !== action.payload)
    },

     // increment: state => {
    //   state.value += 1
    // },
    // decrement: state => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // }
  }
})

// // Action creators are generated for each case reducer function
export const { add, delete1 } = contactsSlice.actions

// export default contactsSlice.reducer