import { ChangeEvent, memo, VFC } from "react";

type Props = {
  type: string;
  placeholder?: string;
  id: string;
  value?: string;
  testid?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
export const PrimaryInput: VFC<Props> = memo((props) => {
  const { type, placeholder, id, value, testid, onChange } = props;
  return (
    <input
      className="border border-gray-400 rounded w-full py-2 px-3 text-gray-600 text-md leading-tight focus:outline-none focus:ring-2 ring-blue-300 my-1 max-h-9"
      type={type}
      placeholder={placeholder}
      id={id}
      value={value}
      data-testid={testid}
      onChange={onChange}
    />
  );
});
