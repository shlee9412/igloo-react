import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  num: number
}

const initialState: CounterState = { num: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    decrease: state => {
      state.num -= 1;
    },
    increase: state => {
      state.num += 1;
    },
    setNum: (state, action: PayloadAction<number>) => {
      state.num = action.payload;
    }
  }
});

export const { decrease, increase, setNum } = counterSlice.actions;

const counterReducer = counterSlice.reducer;
export default counterReducer;
