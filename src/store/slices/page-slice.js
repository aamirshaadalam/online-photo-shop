import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 1,
  pageSize: 25,
};

export const pageSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage: (state, { payload }) => {
      const page = parseInt(payload, 10);
      if (!isNaN(page) && page !== 0) {
        state.page = page;
      }
    },
    setPageSize: (state, { payload }) => {
      const pageSize = parseInt(payload, 10);

      if (!isNaN(pageSize) && pageSize !== 0) {
        state.pageSize = pageSize;
      }
    },
  },
});

export const { setCurrentPage, setPageSize } = pageSlice.actions;

export const getCurrentPage = (state) => state.pagination.page;
export const getPageSize = (state) => state.pagination.pageSize;

export default pageSlice.reducer;
