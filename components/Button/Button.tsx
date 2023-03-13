import { twMerge } from "tailwind-merge";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
};

const Button = ({ children, href, className, ...props }: ButtonProps) => {
  const classNames =
    "inline-block bg-ternary hover:bg-secondary active:bg-primary transition border rounded px-6 py-2 text-sm";

  return href ? (
    <a {...props} href={href} className={twMerge(classNames, className)}>
      {children}
    </a>
  ) : (
    <button className={twMerge(classNames, className)} {...props}>
      {children}
    </button>
  );
};
export default Button;
