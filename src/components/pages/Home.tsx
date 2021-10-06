import { VFC } from "react";

import { MainLayout } from "../templates/MainLayout";
import { MangaList } from "../organisms/MangaList";

export const Home: VFC = () => {
  return (
    <MainLayout title={"Home - Mangaholic"}>
      <div className="w-10/12">
        <MangaList />
      </div>
    </MainLayout>
  );
};
