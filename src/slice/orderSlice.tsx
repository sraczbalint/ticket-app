import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OrderProps {
  name: string;
  email: string;
  fullPrice: number;
  tickets: TicketProps[];
}

export interface TicketProps {
  id: number | string;
  name: string;
  quantity: number;
  price: number;
  isPrinted: boolean;
  isSent: boolean;
}

interface NameAndEmailProps {
  name: string;
  email: string;
}

const initialState: OrderProps = {
  name: "",
  email: "",
  fullPrice: 0,
  tickets: [],
};

export const orderSlice = createSlice({
  name: "orderDetails",
  initialState,
  reducers: {
    updateNameAndEmail: (state, action: PayloadAction<NameAndEmailProps>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    updateTickets: (state, action: PayloadAction<TicketProps[]>) => {
      state.tickets = action.payload;
      state.tickets.map((ticket) => {
        state.fullPrice += ticket.price * ticket.quantity;
        return null;
      });
    },
    resetState: (state) => {
      state = initialState;
    },
  },
});

export const { updateNameAndEmail, updateTickets, resetState } =
  orderSlice.actions;

export default orderSlice.reducer;
