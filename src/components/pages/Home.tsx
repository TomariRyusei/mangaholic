import { VFC } from "react";

import { MainLayout } from "../templates/MainLayout";
import { MangaList } from "../organisms/MangaList";

export const Home: VFC = () => {
  return (
    <MainLayout title={"Home - Mangaholic"}>
      <div>
        <MangaList />
      </div>
    </MainLayout>
  );
};
