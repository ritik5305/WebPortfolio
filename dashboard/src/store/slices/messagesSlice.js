import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const messageSlice = createSlice({
  name: "messages",
  initialState: {
    loading: false,
    messages: [],
    error: null,
    message: null,
  },
  reducers: {
    fetchMessagesRequest(state) {
      state.messages = [];
      state.error = null;
      state.loading = true;
    },
    fetchMessagesSuccess(state, action) {
      state.messages = action.payload;
      state.error = null;
      state.loading = false;
    },
    fetchMessagesFailed(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    deleteMessageRequest(state) {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    deleteMessageSuccess(state, action) {
      state.error = null;
      state.loading = false;
      state.message = action.payload;
    },
    deleteMessageFailed(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    resetMessageSlice(state) {
      state.error = null;
      state.message = null;
      state.loading = false;
    },
    clearAllErrors(state) {
      state.error = null;
    },
  },
});


export const getAllMessages = () => async (dispatch) => {
  dispatch(messageSlice.actions.getAllMessagesRequest());
  try {
    const response = await axios.get(
      "https://full-stack-portfolio-hr29.onrender.com/api/v1/message/getall",
      { withCredentials: true }
    );
    dispatch(
      messageSlice.actions.getAllMessagesSuccess(response.data.messages)
    );
    dispatch(messageSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(
      messageSlice.actions.getAllMessagesFailed(error.response.data.message)
    );
  }
};

export const deleteMessage = (id) => async (dispatch) => {
  dispatch(messageSlice.actions.deleteMessageRequest());
  try {
    const response = await axios.delete(
      `https://full-stack-portfolio-hr29.onrender.com/api/v1/message/delete/${id}`,
      {
        withCredentials: true,
      }
    );
    dispatch(messageSlice.actions.deleteMessageSuccess(response.data.message));
    dispatch(messageSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(
      messageSlice.actions.deleteMessageFailed(error.response.data.message)
    );
  }
};

export const clearAllMessageErrors = () => (dispatch) => {
  dispatch(messageSlice.actions.clearAllErrors());
};

export const resetMessagesSlice = () => (dispatch) => {
  dispatch(messageSlice.actions.resetMessageSlice());
};

export default messageSlice.reducer;
