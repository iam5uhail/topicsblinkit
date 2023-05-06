import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const CounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increament: (state, payload) => {
      state.value = state.value + 1;
    },
    decreament: (state, payload) => {
      state.value = state.value - 1;
    },
    byAmount: (state, payload) => {
      state.value = state.value + payload;
    },
  },
});

export const { increament, decreament, byAmount } = CounterSlice.actions;

export default CounterSlice.reducer;
