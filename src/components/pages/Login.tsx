import { memo, VFC } from "react";

import { MainLayout } from "../templates/MainLayout";
import { LoginForm } from "../organisms/form/LoginForm";

export const Login: VFC = memo(() => {
  return (
    <MainLayout>
      <LoginForm />
    </MainLayout>
  );
});
