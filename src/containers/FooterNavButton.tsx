import React, { FunctionComponent, PropsWithChildren } from "react";
import { Button } from "atoms/Button";

interface NavButtonProps {
  forwardClick?: () => void;
  backwardClick?: () => void;
}

export const FooterNavButton: FunctionComponent<
  PropsWithChildren<NavButtonProps>
> = ({ forwardClick, backwardClick }) => {
  return (
    <div className="flex justify-between">
      <Button
        disabled={Boolean(!backwardClick)}
        onClick={backwardClick}
        className="grow py-2 text-bold w-[120px] text-lg text-white rounded-3xl bg-[#808080]"
      >
        Előző
      </Button>
      <Button
        disabled={Boolean(!forwardClick)}
        onClick={forwardClick}
        className="grow py-2 text-bold  w-[120px] text-lg text-white rounded-3xl bg-[#808080]"
      >
        Következő
      </Button>
    </div>
  );
};
