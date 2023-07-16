import { contactsReducer } from "./contactSlice";
import { filtersReducer } from "./filterSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
