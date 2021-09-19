import { VFC } from "react";

import { MainLayout } from "../templates/MainLayout";
import { RegisterForm } from "../organisms/form/RegisterForm";

export const Register: VFC = () => {
  return (
    <MainLayout title={"Register - Mangaholic"}>
      <RegisterForm />
    </MainLayout>
  );
};
