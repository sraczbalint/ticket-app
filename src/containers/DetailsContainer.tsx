import React, { FunctionComponent, useState } from "react";
import { Input } from "atoms/Input";

import { useDispatch, useSelector } from "react-redux";
import { updateNameAndEmail } from "slice/orderSlice";
import {
  updateComponents,
  updateCurrentComponent,
} from "slice/wizardPageSlice";
import { RootState } from "store";
import { FooterNavButton } from "./FooterNavButton";

interface OrderDataProps {
  name: string;
  email: string;
}

export const DetailsContainer: FunctionComponent = () => {
  const [orderdata, setOrderdata] = useState<OrderDataProps>({
    name: "",
    email: "",
  });
  const dispatch = useDispatch();
  const currentComponent = useSelector(
    (state: RootState) => state.page.current
  );

  return (
    <div className=" flex flex-col justify-between w-full h-full px-[24px]">
      <Input
        title="Név"
        placeholder=""
        onChange={(e) => setOrderdata({ ...orderdata, name: e.target.value })}
        value={orderdata.name}
      />
      <Input
        title="Email"
        placeholder=""
        onChange={(e) => setOrderdata({ ...orderdata, email: e.target.value })}
        value={orderdata.email}
      />

      <FooterNavButton
        forwardClick={() => {
          dispatch(updateCurrentComponent("Jegyek küldése"));
          dispatch(updateComponents(currentComponent));
          dispatch(updateNameAndEmail(orderdata));
        }}
        backwardClick={() => {
          dispatch(updateCurrentComponent("Kosár"));
        }}
      />
    </div>
  );
};
