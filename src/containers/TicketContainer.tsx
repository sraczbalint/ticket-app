import React, { FunctionComponent, useState } from "react";
import { Button } from "atoms/Button";
import { DummyData } from "dummy";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { TicketProps, updateTickets } from "slice/orderSlice";
import { updateCurrentComponent } from "slice/wizardPageSlice";
import { FooterNavButton } from "./FooterNavButton";

export const TicketContainer: FunctionComponent = () => {
  const [tickets, setTickets] = useState<TicketProps[]>(DummyData);
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
          dispatch(updateTickets(tickets));
        }}
      />
    </div>
  );
};
