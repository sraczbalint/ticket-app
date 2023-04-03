import React, { FunctionComponent, PropsWithChildren } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "atoms/Button";
import { PageProps } from "slice/wizardPageSlice";
import { RootState } from "store";

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
  const page: PageProps = useSelector((state: RootState) => state.page);
  return (
    <div>
      <div className="">
        <img
          alt="background"
          className="object-cover m-[-10px] h-full w-full"
          src="https://img.freepik.com/free-photo/beautiful-shot-live-concert-performance-with-yellow-light-show-big-crowd-cheering_181624-55905.jpg?w=2000"
        />
      </div>
      <div className="absolute flex flex-col bg-white top-[200px]">
        <div className=" flex flex-col pb-[85px] overflow-y ">{children}</div>
        <div className="flex flex-row justify-between">
          {String(page) === "Jegyek kiválasztása" && (
            <Button
              onClick={() => forwardClick}
              className=" flex justify-center grow py-2 text-bold text-lg text-white rounded-3xl bg-gradient-to-r from-pink-500 to-purple-900"
            >
              Következő
            </Button>
          )}
          {String(page) === "Jegyek küldése" && (
            <Button
              onClick={() => backwardClick}
              className=" flex justify-center grow py-2 text-bold text-lg text-white rounded-3xl bg-gradient-to-r from-pink-500 to-purple-900"
            >
              Előző
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WizardLayout;
