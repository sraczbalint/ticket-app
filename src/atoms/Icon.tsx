import React, { FunctionComponent, PropsWithChildren, ReactNode } from "react";

interface IconProps {
  className?: string;
  icon: ReactNode;
  size?: number;
}

export const Icon: FunctionComponent<PropsWithChildren<IconProps>> = ({
  className,
  icon,
  size,
  ...props
}: IconProps) => {
  return (
    <div className={`h-[${size}px] w-[${size}px] ${className}`} {...props}>
      {icon}
    </div>
  );
};
