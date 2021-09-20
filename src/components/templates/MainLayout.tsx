import { memo, ReactNode, useEffect, VFC } from "react";

import { Navbar } from "../organisms/layout/Navbar";
import { Footer } from "../organisms/layout/Footer";

type Props = {
  title: string;
  children: ReactNode;
};
export const MainLayout: VFC<Props> = memo((props) => {
  const { title, children } = props;
  useEffect(() => {
    document.title = title;
  }, [title]);

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
