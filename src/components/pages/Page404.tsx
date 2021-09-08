import { memo, VFC } from "react";

import { MainLayout } from "../templates/MainLayout";

export const Page404: VFC = memo(() => {
  return (
    <MainLayout>
      <p>404: ページが見つかりません。</p>
    </MainLayout>
  );
});
