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
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-1"
      type={type}
      placeholder={placeholder}
      id={id}
      onChange={onChange}
    />
  );
});
