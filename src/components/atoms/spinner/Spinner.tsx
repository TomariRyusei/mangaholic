import { VFC } from "react";

export const Spinner: VFC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen min-w-full">
      <div
        style={{ borderTopColor: "transparent" }}
        className="animate-spin rounded-full h-6 w-6 border-2 border-solid border-gray-600 mr-3"
      ></div>
      <p className="text-gray-600 text-lg">Now Loading...</p>
    </div>
  );
};
