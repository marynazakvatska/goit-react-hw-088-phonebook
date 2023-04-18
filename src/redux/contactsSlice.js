import { createSlice } from "@reduxjs/toolkit";
import { register, deleteContact, fetchContacts} from "./operations";


const contactsInitialState = {
    items: [],
    isLoading: false,
    error: null
};
  
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  extraReducers: {

 [fetchContacts.pending]: handlePending,
     [fetchContacts.fulfilled](state, action) {
        state.isLoading = false;
     state.error = null;
      state.items = action.payload;  
    },
     [fetchContacts.rejected]: handleRejected,


 
    [register.pending]: handlePending,
    [register.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [register.rejected]: handleRejected,
    
    
    
     [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]:handleRejected,
  },

});
export const contactsReducer = contactSlice.reducer;

