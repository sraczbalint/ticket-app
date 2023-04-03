import { FunctionComponent, PropsWithChildren } from "react";
import { Icon } from "./Icon";

/**
 * @param {React.HTMLProps<HTMLButtonElement>} props
 */

interface ButtonProps {
  icon?: string;
  iconClassname?: string;
  className?: string;
  divClassName?: string;
  onClick: () => void;
}

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  icon,
  iconClassname,
  className,
  divClassName,
  children,
  onClick,
  ...props
}) => {
  return (
    <div className={`${divClassName}`}>
      <button
        className={`py-2 px-4 flex justify-center font-semibold rounded-xl shadow-md cursor-pointer ${className}`}
        {...props}
        onClick={onClick}
      >
        {icon && <Icon icon={icon} className={iconClassname} />}
        {children}
      </button>
    </div>
  );
};
