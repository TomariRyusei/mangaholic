import { render, screen, cleanup } from "@testing-library/react";
import { LoginForm } from "../components/organisms/form/LoginForm";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

afterEach(() => {
  cleanup();
});

describe("Rendering", () => {
  it("Should render all the elements correctly", () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );
    expect(screen.getByTestId("loginLabel")).toBeTruthy();
    expect(screen.getByTestId("emailInput")).toBeTruthy();
    expect(screen.getByTestId("passwordInput")).toBeTruthy();
    expect(screen.getByTestId("loginButton")).toBeTruthy();
    expect(screen.getByTestId("googleLoginButton")).toBeTruthy();
    expect(screen.getByTestId("facebookLoginButton")).toBeTruthy();
    expect(screen.getByTestId("toSignUpLink")).toBeTruthy();
    expect(screen.getByTestId("toForgtoPasswordLink")).toBeTruthy();
  });
});

describe("Input form onChange event", () => {
  it("Should update email input value correctly", () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );
    const emailInput = screen.getByTestId("emailInput") as HTMLInputElement;
    userEvent.type(emailInput, "test");
    expect(emailInput.value).toBe("test");
  });
  it("Should update password input value correctly", () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );
    const passwordInput = screen.getByTestId(
      "passwordInput"
    ) as HTMLInputElement;
    userEvent.type(passwordInput, "test");
    expect(passwordInput.value).toBe("test");
  });
});
