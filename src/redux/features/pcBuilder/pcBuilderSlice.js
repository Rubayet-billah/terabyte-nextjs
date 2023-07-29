// features/pcBuilderSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedComponents: {
    cpu: null,
    motherboard: null,
    ram: null,
    powerSupply: null,
    storage: null,
    monitor: null,
  },
};

const pcBuilderSlice = createSlice({
  name: "pcBuilder",
  initialState,
  reducers: {
    selectComponent: (state, action) => {
      const { category, component } = action.payload;
      state.selectedComponents[category] = component;
    },
    completeBuild: (state) => {
      // Perform any additional logic for completing the PC build
    },
  },
});

export const { selectComponent, completeBuild } = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
