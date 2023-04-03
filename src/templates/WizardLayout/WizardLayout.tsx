import React, { FunctionComponent, PropsWithChildren } from "react";
import { Button } from "atoms/Button";
import { BreadCrumbs } from "molecules/BreadCrumbs";

interface WizardLayoutProps {
  // height?: string;
  forwardClick?: () => void;
  backwardClick?: () => void;
}

const WizardLayout: FunctionComponent<PropsWithChildren<WizardLayoutProps>> = ({
  children,
  forwardClick,
  backwardClick,
}) => {
  return (
    <div className="flex w-screen h-screen bg-black">
      <div
        className=""
        // style={{
        //   backgroundImage:
        //     "url('https://source.unsplash.com/07fzqFEfLlo/1920x1080')",
        // }}
      ></div>
      <div className=" flex flex-col m-auto bg-[#c8c8c8] w-[600px] p-[16px] rounded-lg">
        <h2 className="text-center text-[1200] mb-[8px] text-[24px]">BookY</h2>
        <BreadCrumbs />
        <hr className="h-px my-1 bg-g border-0 bg-[#5d5d5d]"></hr>
        <div className=" flex flex-col pb-[85px] overflow-y items-center ">
          {children}
        </div>
        <div className="flex justify-between">
          <Button
            onClick={() => forwardClick}
            className="grow py-2 text-bold  w-[120px] text-lg text-white rounded-3xl bg-[#808080]"
          >
            Következő
          </Button>
          <Button
            onClick={() => backwardClick}
            className="grow py-2 text-bold w-[120px] text-lg text-white rounded-3xl bg-[#808080]"
          >
            Előző
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WizardLayout;
