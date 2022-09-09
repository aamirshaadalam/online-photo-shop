import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { showErrorToast } from '../../utilities';
import { getAllPhotos } from '../../services/api/photos';

export const fetcPhotos = createAsyncThunk('photos/fetchList', async (pagination, { rejectWithValue }) => {
  try {
    const { pageNumber, pageSize } = pagination;
    return await getAllPhotos(pageNumber, pageSize);
  } catch (error) {
    showErrorToast('Error in fetching photos');
    rejectWithValue(error);
  }
});

const initialState = {
  loading: false,
};

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetcPhotos.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(fetcPhotos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetcPhotos.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const getLoadingStatus = (state) => state.photos.loading;

export default photosSlice.reducer;
