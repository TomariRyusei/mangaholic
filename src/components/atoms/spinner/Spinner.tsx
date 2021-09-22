import { VFC } from "react";

export const Spinner: VFC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-navy"></div>
    </div>
  );
};
