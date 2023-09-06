import { FC, ReactNode } from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

export type TagProps = {
  children: ReactNode;
  /** 是否有边框 */
  bordered?: boolean;
  onClose?: () => void;
};

const tagStyles = cva(
  [
    "text-base",
    "text-white",
    "rounded",
    "transition",
    "duration-500 ease select-none  focus:outline-none focus:shadow-outline",
    "text-black",
    "px-2",
    'text-xs',
    'leading-5',
  ],
  {
    variants: {
      bordered: {
        true: ["border", "border-gray-400", 'bg-gray-50'],
      },
    },
    defaultVariants: {
      bordered: true,
    },
  }
);

const Tag: FC<TagProps> = ({ children, bordered = true }) => {
  return <span className={twMerge([tagStyles({ bordered })])}>{children}</span>;
};

export default Tag;
