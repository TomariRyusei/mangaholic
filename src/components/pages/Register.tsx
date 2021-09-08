import { memo, VFC } from "react";

import { MainLayout } from "../templates/MainLayout";
import { RegisterForm } from "../organisms/form/RegisterForm";

export const Register: VFC = memo(() => {
  return (
    <MainLayout>
      <RegisterForm />
    </MainLayout>
  );
});
