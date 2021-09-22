import { VFC, useCallback, useContext } from "react";
import { Link } from "react-router-dom";

import { PrimaryInput } from "../../atoms/input/PrimaryInput";
import { AuthContext } from "../../../providers/Auth";
import { useAuth } from "../../../hooks/useAuth";

export const Navbar: VFC = () => {
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);
  const { logout } = useAuth();
  const onClickMenuToggle = () => {
    document.getElementById("nav-content")?.classList.toggle("hidden");
  };

  const onChangeSearch = useCallback(() => {
    console.log("search");
  }, []);

  const onClickLogout = async () => {
    await logout();
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-grayA p-4 mb-6">
      <div className="flex items-center flex-shrink-0 text-white ml-6">
        {/* <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg> */}
        <Link to="/" className="font-bold text-xl tracking-tight text-navy">
          mangaholic
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-navy"
          onClick={onClickMenuToggle}
        >
          <svg
            className="fill-current h-5 w-5"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden mx-6"
        id="nav-content"
      >
        <div className="lg:flex-grow">
          <div className="lg:w-1/3 w-full lg:mt-0 mt-4 lg:px-3 px-0">
            <PrimaryInput
              type={"search"}
              placeholder={"search"}
              id={"search"}
              onChange={onChangeSearch}
            />
          </div>
        </div>
        {currentUser ? (
          <>
            <div>
              <Link
                to="#"
                className="inline-block text-sm lg:px-3 px-0 text-navy hover:text-white font-semibold text-md mt-4 lg:mt-0"
              >
                {currentUser?.displayName}
              </Link>
            </div>
            <div>
              <button
                className="inline-block text-sm lg:px-3 px-0 text-navy hover:text-white font-semibold text-md mt-4 lg:mt-0"
                onClick={onClickLogout}
              >
                ログアウト
              </button>
            </div>
          </>
        ) : (
          <>
            <div>
              <Link
                to="/login"
                className="inline-block text-sm lg:px-3 px-0 text-navy hover:text-white font-semibold mt-4 lg:mt-0"
              >
                ログイン
              </Link>
            </div>
            <div>
              <Link
                to="/register"
                className="inline-block text-sm lg:px-3 px-0 text-navy hover:text-white font-semibold mt-4 lg:mt-0"
              >
                アカウント作成
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};
