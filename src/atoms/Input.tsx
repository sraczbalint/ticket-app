import React, { FunctionComponent, PropsWithChildren } from "react";

interface InputProps {
  title: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
}

export const Input: FunctionComponent<PropsWithChildren<InputProps>> = ({
  title,
  placeholder,
  onChange,
  value,
}) => {
  return (
    <div>
      {title && <h2 className="font-normal text-left mt-[16px]">{title}</h2>}
      <input
        placeholder={placeholder}
        className="w-full h-10 border rounded-lg solid border-nlightgrey mt-[4px] px-[16px]"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
