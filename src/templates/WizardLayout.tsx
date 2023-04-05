import React, { FunctionComponent, PropsWithChildren } from "react";
import { BreadCrumbs } from "molecules/BreadCrumbs";

interface WizardLayoutProps {}

const WizardLayout: FunctionComponent<PropsWithChildren<WizardLayoutProps>> = ({
  children,
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
      <div className=" flex flex-col m-auto h-[400px] bg-[#c8c8c8] w-[600px] p-[16px] rounded-lg">
        <h2 className="text-center text-[1200] mb-[8px] text-[24px]">BookY</h2>
        <BreadCrumbs />
        <hr className="h-px my-1 bg-g border-0 bg-[#5d5d5d]"></hr>
        <div className=" flex flex-col h-full overflow-y items-center ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default WizardLayout;
