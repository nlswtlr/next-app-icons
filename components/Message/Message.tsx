type MessageProps = {
  type: "success" | "error";
  children: React.ReactNode;
};

const Message = ({ children, type }: MessageProps) => <div className="">{children}</div>;

export default Message;
