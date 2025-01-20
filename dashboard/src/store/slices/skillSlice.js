import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const skillSlice = createSlice({
  name: "skill",
  initialState: {
    loading: false,
    skills: [],
    error: null,
    message: null,
  },
  reducers: {
    fetchSkillsRequest(state) {
      state.loading = true;
      state.error = null;
      state.skills = [];
    },
    fetchSkillsSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.skills = action.payload;
    },
    fetchSkillsFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addSkillRequest(state) {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    addSkillSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.message = action.payload;
    },
    addSkillFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    deleteSkillRequest(state) {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    deleteSkillSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.message = action.payload;
    },
    deleteSkillFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    updateSkillRequest(state) {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    updateSkillSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.message = action.payload;
    },
    updateSkillFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    resetSkillSlice(state) {
      state.loading = false;
      state.error = null;
      state.message = null;
      state.skills = [];
    },
    clearAllErrors(state) {
      state.error = null;
    },
  },
});

export const getAllSkills = () => async (dispatch) => {
  dispatch(skillSlice.actions.getAllSkillsRequest());
  try {
    const response = await axios.get(
      "https://full-stack-portfolio-hr29.onrender.com/api/v1/skill/getall",
      { withCredentials: true }
    );
    dispatch(skillSlice.actions.getAllSkillsSuccess(response.data.skills));
    dispatch(skillSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(
      skillSlice.actions.getAllSkillsFailed(error.response.data.message)
    );
  }
};

export const addNewSkill = (data) => async (dispatch) => {
  dispatch(skillSlice.actions.addNewSkillRequest());
  try {
    const response = await axios.post(
      "https://full-stack-portfolio-hr29.onrender.com/api/v1/skill/add",
      data,
      {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(response);
    console.log(response.data.message);
    dispatch(skillSlice.actions.addNewSkillSuccess(response.data.message));
    dispatch(skillSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(skillSlice.actions.addNewSkillFailed(error.response.data.message));
  }
};

export const updateSkill = (id, proficiency) => async (dispatch) => {
  dispatch(skillSlice.actions.updateSkillRequest());
  try {
    const response = await axios.put(
      `https://full-stack-portfolio-hr29.onrender.com/api/v1/skill/update/${id}`,
      { proficiency },
      {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      }
    );
    dispatch(skillSlice.actions.updateSkillSuccess(response.data.message));
    dispatch(skillSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(skillSlice.actions.updateSkillFailed(error.response.data.message));
  }
};

export const deleteSkill = (id) => async (dispatch) => {
  dispatch(skillSlice.actions.deleteSkillRequest());
  try {
    const response = await axios.delete(
      `https://full-stack-portfolio-hr29.onrender.com/api/v1/skill/delete/${id}`,
      {
        withCredentials: true,
      }
    );
    dispatch(skillSlice.actions.deleteSkillSuccess(response.data.message));
    dispatch(skillSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(skillSlice.actions.deleteSkillFailed(error.response.data.message));
  }
};

export const clearAllSkillErrors = () => (dispatch) => {
  dispatch(skillSlice.actions.clearAllErrors());
};

export const resetSkillSlice = () => (dispatch) => {
  dispatch(skillSlice.actions.resetSkillSlice());
};

export default skillSlice.reducer;
