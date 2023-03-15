type InputProps = {};

const Input = ({ ...props }: any) => {
  return (
    <>
      {/* <label className="block text-sm font-medium text-gray-700"></label> */}
      <input className="border border-slate-900 rounded bg-slate-500 px-2 py-1" {...props} />
    </>
  );
};

export default Input;
