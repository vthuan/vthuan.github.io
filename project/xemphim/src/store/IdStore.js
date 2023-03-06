import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: 0,
};

export const IdStore = createSlice({
  name: 'iditem', // Tên của slice, mỗi slice đặt 1 tên khác nhau để phân biệt
  initialState,
  // Reducers chứa các hàm xử lý cập nhật state
  reducers: {
    updateId(state, action) {
      state.id = action.payload;
    },
    updateIdWatchlist(state, action) {
      state.id = action.payload;
    },
  },
});

export const { updateId, updateIdWatchlist } = IdStore.actions;

export const selectId = (state) => state.iditem.id;

export default IdStore.reducer;
