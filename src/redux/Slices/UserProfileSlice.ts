// UserProfileSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface UserProfileState {
  userData: Record<string, any>; // Adjust the type based on your user object structure
  location: string;
}

const initialState: UserProfileState = {
  userData: {},
  location: '',
};

const UserProfileSlice = createSlice({
  name: 'UserProfileSlice',
  initialState,
  reducers: {
    setUserState: (state, action) => {
      state.userData = action.payload.userData;
      state.location = action.payload.location;
    },
  },
});

export const { setUserState } = UserProfileSlice.actions;

export default UserProfileSlice.reducer;
export type UserProfileSliceState = ReturnType<typeof UserProfileSlice.reducer>;
