import { VFC } from "react";

import { MainLayout } from "../templates/MainLayout";

export const Page404: VFC = () => {
  return (
    <MainLayout title={"Page Not Found - Mangaholic"}>
      <p>404: ページが見つかりません。</p>
    </MainLayout>
  );
};
