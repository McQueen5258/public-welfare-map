import axios from 'axios';
// import { filter, map } from 'lodash';
import { createSlice } from '@reduxjs/toolkit';

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
      const response = await axios.get('/Data/PublicWelfareCoordinates/data.geo.json');
      dispatch(slice.actions.getPublicWelfareSuccess(response.data.points));
    } catch (error) {
      dispatch(slice.actions.hasError(error.message));
    }
  };
}