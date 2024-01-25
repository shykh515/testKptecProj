// NewPostSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NewPostState {
  posts: Record<string, any>[]; // Adjust the type based on your post object structure
}

const initialState: NewPostState = {
  posts: [],
};

const NewPostSlice = createSlice({
  name: 'NewPostSlice',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Record<string, any>>) => {
      state.posts.push(action.payload);
    },
    setPosts: (state, action: PayloadAction<Record<string, any>[]>) => {
      state.posts = action.payload;
    },
  },
});

export const { addPost, setPosts } = NewPostSlice.actions;

export default NewPostSlice.reducer;
export type NewPostSliceState = ReturnType<typeof NewPostSlice.reducer>;
