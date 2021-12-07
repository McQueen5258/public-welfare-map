import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  error: '',
  isLoading: false,
  type: null,
  ChinaMapData: []
};

const slice = createSlice({
  name: 'chinaMap',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },

    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    getChinaMapSuccess(state, action) {
      state.isLoading = false;
      state.ChinaMapData = action.payload.features;
      state.type = action.payload.type;
    }
  }
});

// Reducer
export default slice.reducer;

// Actions
export const { hasError } = slice.actions;

// ----------------------------------------------------------------

export function getChinaMapData() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/Map/ChinaData.geo.json');
      dispatch(slice.actions.getChinaMapSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error.message));
    }
  };
}