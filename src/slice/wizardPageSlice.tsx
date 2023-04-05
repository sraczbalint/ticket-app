import { createSlice } from "@reduxjs/toolkit";

interface ComponentProps {
  id: number;
  name: "Jegyek kiválasztása" | "Kosár" | "Fizetési adatok" | "Jegyek küldése";
  status: boolean;
}

export interface PageProps {
  current:
    | "Jegyek kiválasztása"
    | "Kosár"
    | "Fizetési adatok"
    | "Jegyek küldése";
  components: ComponentProps[];
}

const initialState: PageProps = {
  current: "Jegyek kiválasztása",
  components: [
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
  ],
};

export const wizardPageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    // TODO add payloadAction to updateWizard
    updateComponents: (state, action) => {
      state.components.map((obj) => {
        if (obj.id === action.payload.id) {
          return { ...obj, status: !obj.status };
        }
        return obj;
      });
    },
    updateCurrentComponent: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { updateComponents, updateCurrentComponent } =
  wizardPageSlice.actions;

export default wizardPageSlice.reducer;
