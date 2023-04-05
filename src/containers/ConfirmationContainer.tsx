import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetState } from "slice/orderSlice";
import { updateCurrentComponent } from "slice/wizardPageSlice";
import { RootState } from "store";
import { FooterNavButton } from "./FooterNavButton";

export const ConfirmationContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const tickets = useSelector((state: RootState) => state.order.tickets);

  return (
    <div className=" flex flex-col justify-between w-full h-full px-[24px]">
      {tickets.map((ticket) => (
        <div key={ticket.id}>
          <div>{ticket.name}</div>
        </div>
      ))}

      <FooterNavButton
        forwardClick={() => {
          dispatch(updateCurrentComponent("Jegyek kiválasztása"));
          dispatch(resetState());
        }}
      />
    </div>
  );
};
