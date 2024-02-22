import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "list",
  initialState: [
    { id: 1, text: "기본 세팅 첫번째 아이템" },
    { id: 2, text: "기본 세팅 두번째 아이템" },
  ],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = listSlice.actions;

export default listSlice.reducer;
