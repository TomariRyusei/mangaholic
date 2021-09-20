import { VFC, useContext } from "react";

import { MainLayout } from "../templates/MainLayout";

export const Home: VFC = () => {
  return (
    <MainLayout title={"Home - Mangaholic"}>
      <p>HOMEページです</p>
    </MainLayout>
  );
};
