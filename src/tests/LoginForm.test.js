import { render, screen } from "@testing-library/react";
import { LoginForm } from "../components/organisms/form/LoginForm";
import { MemoryRouter } from "react-router-dom";

describe("Rendering", () => {
  it("Should render all the elements correctly", () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );
    expect(screen.getByText("パスワードをお忘れの方はこちら")).toBeTruthy();
  });
});
