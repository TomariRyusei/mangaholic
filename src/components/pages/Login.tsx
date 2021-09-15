import { VFC } from "react";

import { MainLayout } from "../templates/MainLayout";
import { LoginForm } from "../organisms/form/LoginForm";

export const Login: VFC = () => {
  return (
    <MainLayout>
      <LoginForm />
    </MainLayout>
  );
};
