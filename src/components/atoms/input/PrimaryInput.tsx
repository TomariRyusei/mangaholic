import { memo, VFC } from "react";

type Props = {
  type: string;
  placeholder?: string;
  id: string;
  onChange: () => void;
};
export const PrimaryInput: VFC<Props> = memo((props) => {
  const { type, placeholder, id, onChange } = props;
  return (
    <input
      className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-600 text-md leading-tight focus:outline-none focus:shadow-outline my-1 max-h-9"
      type={type}
      placeholder={placeholder}
      id={id}
      onChange={onChange}
    />
  );
});
