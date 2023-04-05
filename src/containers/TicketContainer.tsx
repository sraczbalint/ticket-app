import React, { FunctionComponent, useState } from "react";
import { Button } from "atoms/Button";
import { DummyData } from "dummy";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { TicketProps, updateTickets } from "slice/orderSlice";
import {
  updateComponents,
  updateCurrentComponent,
} from "slice/wizardPageSlice";
import { RootState } from "store";
import { FooterNavButton } from "./FooterNavButton";

export const TicketContainer: FunctionComponent = () => {
  const [tickets, setTickets] = useState<TicketProps[]>(DummyData);
  const currentComponent = useSelector(
    (state: RootState) => state.page.current
  );

  const dispatch = useDispatch();

  const handleAddQuantity = (ticket: TicketProps) => {
    setTickets((current) =>
      current.map((obj) => {
        if (obj.id === ticket.id) {
          return { ...obj, quantity: obj.quantity + 1 };
        }
        return obj;
      })
    );
  };

  const handleRemoveQuantity = (ticket: TicketProps) => {
    setTickets((current) =>
      current.map((obj) => {
        if (obj.id === ticket.id) {
          return { ...obj, quantity: obj.quantity - 1 };
        }
        return obj;
      })
    );
  };

  return (
    <div className=" flex flex-col justify-between w-full h-full px-[24px]">
      <div className="">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="flex flex-row justify-between">
            <div>{ticket.name}</div>
            <div className="flex flex-row justify-center">
              <div>{ticket.price} Ft</div>
              <div className="flex flex-row ">
                <Button
                  onClick={() => handleRemoveQuantity(ticket)}
                  icon={<AiOutlineMinus />}
                />
                <div>{ticket.quantity}</div>
                <Button
                  onClick={() => handleAddQuantity(ticket)}
                  icon={<AiOutlinePlus />}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <FooterNavButton
        forwardClick={() => {
          dispatch(updateCurrentComponent("Kosár"));
          dispatch(updateComponents(currentComponent));
          dispatch(updateTickets(tickets));
        }}
      />
    </div>
  );
};
