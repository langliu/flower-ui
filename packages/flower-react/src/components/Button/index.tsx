import { FC, ReactNode } from "react";

export type ButtonProps = {
  onClick?: () => void;
  type?: "primary" | "success" | "info" | "warning" | "error";
  children?: ReactNode;
};

const Button: FC<ButtonProps> = ({ type = "primary", onClick, children }) => {
  console.log("type", type);

  return (
    <button onClick={onClick} type={"button"}>
      {children}
    </button>
  );
};

export default Button;
