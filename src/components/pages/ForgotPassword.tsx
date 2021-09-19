import { VFC } from "react";

import { MainLayout } from "../templates/MainLayout";
import { PasswordResetForm } from "../organisms/form/PasswordResetForm";

export const ForgotPassword: VFC = () => {
  return (
    <MainLayout title={"Password Reset - Mangaholic"}>
      <PasswordResetForm />
    </MainLayout>
  );
};
