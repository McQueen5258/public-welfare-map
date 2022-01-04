import axios from 'axios';
// import { filter, map } from 'lodash';
import { createSlice } from '@reduxjs/toolkit';
import AV from 'leancloud-storage';

const initialState = {
  error: '',
  isLoading: false,
  publicWelfare: null,
  publicWelfareData: []
};

const slice = createSlice({
  name: 'publicWelfare',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },

    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    getPublicWelfareSuccess(state, action) {
      state.isLoading = false;
      state.publicWelfareData = action.payload;
    }
  }
});

// Reducer
export default slice.reducer;

// Actions
export const { hasError } = slice.actions;

// ----------------------------------------------------------------

export function getPublicWelfareData() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const query = new AV.Query('publicWelfare');
      query
        .find()
        .then((response) => {
          dispatch(slice.actions.getPublicWelfareSuccess(response));
          console.log('data: ', response);
        })
        .catch((err) => {
          dispatch(slice.actions.hasError(err.message));
        });
    } catch (error) {}
  };
}
