import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./contactsSlice";
import authSlice from "./authSlice";


export const store = configureStore({
    reducer: {
        phonebook: contactsSlice,
        auth: authSlice,
    },
});
