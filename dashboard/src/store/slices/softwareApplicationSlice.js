import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const softwareApplicationSlice = createSlice({
  name: "softwareApplications",
  initialState: {
    loading: false,
    softwareApplications: [],
    error: null,
    message: null,
  },
  reducers: {
    fetchSoftwareApplicationsRequest(state) {
      state.loading = true;
      state.error = null;
      state.softwareApplications = [];
    },
    fetchSoftwareApplicationsSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.softwareApplications = action.payload;
    },
    fetchSoftwareApplicationsFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addSoftwareApplicationRequest(state) {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    addSoftwareApplicationSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.message = action.payload;
    },
    addSoftwareApplicationFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    deleteSoftwareApplicationRequest(state) {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    deleteSoftwareApplicationSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.message = action.payload;
    },
    deleteSoftwareApplicationFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    resetSoftwareApplicationSlice(state) {
      state.loading = false;
      state.error = null;
      state.message = null;
      state.softwareApplications = [];
    },
    clearAllErrors(state) {
      state.error = null;
    },
  },
});

export const getAllSoftwareApplications = () => async (dispatch) => {
  dispatch(
    softwareApplicationSlice.actions.getAllsoftwareApplicationsRequest()
  );
  try {
    const response = await axios.get(
      "https://full-stack-portfolio-hr29.onrender.com/api/v1/softwareapplication/getall",
      { withCredentials: true }
    );
    dispatch(
      softwareApplicationSlice.actions.getAllsoftwareApplicationsSuccess(
        response.data.softwareApplications
      )
    );
    dispatch(softwareApplicationSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(
      softwareApplicationSlice.actions.getAllsoftwareApplicationsFailed(
        error.response.data.message
      )
    );
  }
};

export const addNewSoftwareApplication = (data) => async (dispatch) => {
  dispatch(
    softwareApplicationSlice.actions.addNewsoftwareApplicationsRequest()
  );
  try {
    const response = await axios.post(
      "https://full-stack-portfolio-hr29.onrender.com/api/v1/softwareapplication/add",
      data,
      {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    dispatch(
      softwareApplicationSlice.actions.addNewsoftwareApplicationsSuccess(
        response.data.message
      )
    );
    dispatch(softwareApplicationSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(
      softwareApplicationSlice.actions.addNewsoftwareApplicationsFailed(
        error.response.data.message
      )
    );
  }
};

export const deleteSoftwareApplication = (id) => async (dispatch) => {
  dispatch(
    softwareApplicationSlice.actions.deletesoftwareApplicationsRequest()
  );
  try {
    const response = await axios.delete(
      `https://full-stack-portfolio-hr29.onrender.com/api/v1/softwareapplication/delete/${id}`,
      {
        withCredentials: true,
      }
    );
    dispatch(
      softwareApplicationSlice.actions.deletesoftwareApplicationsSuccess(
        response.data.message
      )
    );
    dispatch(softwareApplicationSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(
      softwareApplicationSlice.actions.deletesoftwareApplicationsFailed(
        error.response.data.message
      )
    );
  }
};

export const clearAllSoftwareAppErrors = () => (dispatch) => {
  dispatch(softwareApplicationSlice.actions.clearAllErrors());
};

export const resetSoftwareApplicationSlice = () => (dispatch) => {
  dispatch(softwareApplicationSlice.actions.resetSoftwareApplicationSlice());
};

export default softwareApplicationSlice.reducer;
