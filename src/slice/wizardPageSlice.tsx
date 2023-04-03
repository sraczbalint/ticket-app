import { createSlice } from "@reduxjs/toolkit";

export interface PageProps {
  id: number;
  name: "Jegyek kiválasztása" | "Kosár" | "Fizetési adatok" | "Jegyek küldése";
  status: boolean;
}

const initialState: PageProps[] = [
  {
    id: 1,
    name: "Jegyek kiválasztása",
    status: false,
  },
  {
    id: 2,
    name: "Kosár",
    status: true,
  },
  {
    id: 3,
    name: "Fizetési adatok",
    status: true,
  },
  {
    id: 4,
    name: "Jegyek küldése",
    status: true,
  },
];

export const wizardPageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    // TODO add payloadAction to updateWizard
    updateWizard: (state, action) => {
      const currentState = state.filter(
        (page) => page.id !== action.payload.id
      );
      // console.log(currentState);
      state = [currentState, ...action.payload];
    },
  },
});

export const { updateWizard } = wizardPageSlice.actions;

export default wizardPageSlice.reducer;
