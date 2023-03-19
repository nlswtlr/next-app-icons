import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type InputProps = {
  className?: string;
  placeholder?: string;
  hint?: string;
  error?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { placeholder, hint, className, error, ...props },
  ref
) {
  console.log({ ...props });

  return (
    <div className={className}>
      <input
        className={twMerge(
          "border border-slate-900 w-full rounded bg-slate-500 px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
        )}
        {...props}
        placeholder={placeholder}
        ref={ref}
      />
      {error && <p className="mt-2 text-xs px-2 text-red-500">{error}</p>}
      {hint && <p className="mt-2 text-xs px-2 text-slate-500">{hint}</p>}
    </div>
  );
});

export default Input;
