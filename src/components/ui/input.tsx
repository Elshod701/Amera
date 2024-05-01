import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "border-none outline-none w-[368px] p-[10px] pl-[25px] rounded-l-[30px] h-[100%] flex-grow",
          className
        )}
        placeholder="Search Products..."
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
