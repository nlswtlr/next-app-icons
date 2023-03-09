const Button = ({
  ...props
}: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => (
  <a {...props} className="inline-block bg-ternary border rounded px-6 py-2 text-sm"></a>
);

export default Button;
