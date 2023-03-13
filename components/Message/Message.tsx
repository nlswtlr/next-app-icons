import { twMerge } from "tailwind-merge";

type MessageProps = {
  type: "success" | "error";
  children: React.ReactNode;
  className?: string;
};

const Message = ({ children, type, className }: MessageProps) => (
  <div
    className={twMerge(
      `border py-2 px-4 ${
        type === "error" ? "text-red-500 border-red-500" : "text-green-500 border-green-500"
      } text-sm`,
      className
    )}
  >
    {children}
  </div>
);

export default Message;
