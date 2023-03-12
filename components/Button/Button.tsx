type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
};

const Button = ({ children, href, className, ...props }: ButtonProps) => {
  const classNames = "inline-block bg-ternary border rounded px-6 py-2 text-sm";

  return href ? (
    <a {...props} href={href} className={`${classNames} ${className}`}>
      {children}
    </a>
  ) : (
    <button className={`${classNames} ${className}`} {...props}>
      {children}
    </button>
  );
};
export default Button;
