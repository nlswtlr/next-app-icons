type MessageProps = {
  type: "success" | "error";
  children: React.ReactNode;
  className?: string;
};

const Message = ({ children, type }: MessageProps) => (
  <div
    className={`border py-2 px-4 ${
      type === "error" ? "text-red-500 border-red-500" : "text-green-500 border-green-500"
    } text-sm`}
  >
    {children}
  </div>
);

export default Message;
