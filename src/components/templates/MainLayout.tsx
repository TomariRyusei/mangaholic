import { memo, ReactNode, VFC } from "react";

import { Navbar } from "../organisms/layout/Navbar";
import { Footer } from "../organisms/layout/Footer";

type Props = {
  children: ReactNode;
};
export const MainLayout: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex items-center justify-center">{children}</main>
      <footer className="my-auto w-full">
        <Footer />
      </footer>
    </div>
  );
});
