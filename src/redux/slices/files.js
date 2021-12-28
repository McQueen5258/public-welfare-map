import axios from 'axios';
// import { filter, map } from 'lodash';
import { createSlice } from '@reduxjs/toolkit';
import AV from 'leancloud-storage';

const initialState = {
  error: '',
  isLoading: false,
  publicWelfare: null,
  publicWelfareFiles: []
};

const slice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },

    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    getFilesSuccess(state, action) {
      state.isLoading = false;
      state.publicWelfareFiles = action.payload;
    }
  }
});

// Reducer
export default slice.reducer;

// Actions
export const { hasError } = slice.actions;

// ----------------------------------------------------------------

export function getPublicWelfareFiles() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const query = new AV.Query('_File');
      query.find().then((response) => {
        console.log('response: ', response);
        dispatch(slice.actions.getFilesSuccess(response));
      });
    } catch (error) {
      dispatch(slice.actions.hasError(error.message));
    }
  };
}
