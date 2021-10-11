import { VFC } from "react";
import { Link } from "react-router-dom";

export const UnauthHome: VFC = () => {
  return (
    <div>
      <h2>
        <Link
          to="/login"
          className="text-gray-600 hover:underline hover:text-navy text-md my-2 mx-1"
          data-testid="toSignUpLink"
        >
          ログイン
        </Link>
        /
        <Link
          to="/register"
          className="text-gray-600 hover:underline hover:text-navy text-md my-2 mx-1"
          data-testid="toSignUpLink"
        >
          登録
        </Link>
        してお気に入りの漫画を登録しよう！！
      </h2>
    </div>
  );
};
