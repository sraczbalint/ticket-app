import React, { FunctionComponent, PropsWithChildren } from "react";
import { Icon } from "atoms/Icon";
import { MdDone } from "react-icons/md";
import { useSelector } from "react-redux";
import { RootState } from "store";

interface BreadCrumbsProps {
  name?: string;
}

export const BreadCrumbs: FunctionComponent<
  PropsWithChildren<BreadCrumbsProps>
> = () => {
  const pages = useSelector((state: RootState) => state.page);
  return (
    <div className="flex flex-row gap-5 justify-center ">
      {pages.map((page) => (
        <div className="flex flex-col items-center w-[100px]">
          <div className="h-6 w-6 flex items-center justify-center text-black bg-[#3b2525] font-semibold rounded-full text-sm  ">
            {!page.status && (
              <Icon
                className="cursor-pointer text-white"
                icon={<MdDone />}
                size={17}
              ></Icon>
            )}
          </div>
          <p className="text-[10px] leading-4">{page.name}</p>
        </div>
      ))}
    </div>
  );
};
