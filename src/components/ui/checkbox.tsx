import { forwardRef } from "react";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        type="checkbox"
        className={`h-4 w-4 rounded border border-primary text-primary shadow focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Checkbox.displayName = "Checkbox";

export { Checkbox };