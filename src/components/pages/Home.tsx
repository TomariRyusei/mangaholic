import { VFC, useContext } from "react";

import { MainLayout } from "../templates/MainLayout";
import { MangaList } from "../organisms/MangaList";
import { UnauthHome } from "../organisms/UnauthHome";
import { AuthContext } from "../../providers/Auth";

export const Home: VFC = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <MainLayout title={"Home - Mangaholic"}>
      {currentUser ? (
        <div className="w-10/12">
          <MangaList />
        </div>
      ) : (
        <UnauthHome />
      )}
    </MainLayout>
  );
};
