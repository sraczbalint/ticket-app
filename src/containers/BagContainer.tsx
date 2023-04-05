import React, { FunctionComponent } from "react";

import { useDispatch, useSelector } from "react-redux";
import { updateCurrentComponent } from "slice/wizardPageSlice";
import { RootState } from "store";
import { FooterNavButton } from "./FooterNavButton";

export const BagContainer: FunctionComponent = () => {
  const tickets = useSelector((state: RootState) => state.order.tickets);

  const dispatch = useDispatch();

  return (
    <div className=" flex flex-col justify-between w-full h-full px-[24px]">
      <div className="">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="flex flex-row justify-between">
            <div>{ticket.name}</div>
            <div className="flex flex-row justify-center">
              <div className="flex flex-row ">
                <div>{ticket.quantity} db</div>
                <div>{ticket.price} Ft</div>
                <div>{ticket.price * ticket.quantity} Ft</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <FooterNavButton
        forwardClick={() => {
          dispatch(updateCurrentComponent("Fizetési adatok"));
        }}
      />
    </div>
  );
};
