import { createSlice } from "@reduxjs/toolkit";
import { db } from "../../Database";

const initialState = {
  assignments: db.assignments,
  assignment: {
    title: "",
    week: "",
    dueDate: "",
    points: "",
    course: "",
    description: "",
  },
};

const assignmentSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [
        { ...action.payload, _id: new Date().getTime().toString() },
        ...state.assignments,
      ];
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (action.payload._id === assignment._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => action.payload !== assignment._id
      );
    },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} = assignmentSlice.actions;
export default assignmentSlice.reducer;
