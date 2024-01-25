// LoadingSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface LoadingState {
  loading: boolean;
}

const initialState: LoadingState = {
  loading: false,
};

const LoadingSlice = createSlice({
  name: 'LoadingSlice',
  initialState,
  reducers: {
    showLoading: (state) => {
      state.loading = true;
    },
    hideLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { showLoading, hideLoading } = LoadingSlice.actions;

export default LoadingSlice.reducer;
export type LoadingSliceState = ReturnType<typeof LoadingSlice.reducer>;
