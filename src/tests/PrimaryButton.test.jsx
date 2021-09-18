import { render, screen, cleanup } from "@testing-library/react";
import { PrimaryButton } from "../components//atoms/button/PrimaryButton";
import userEvent from "@testing-library/user-event";

afterEach(() => {
  cleanup();
});

describe("Rendering", () => {
  it("Should render all the elements correctly", () => {
    render(<PrimaryButton />);
    expect(screen.getByRole("button")).toBeTruthy();
  });
});

describe("test onclick event", () => {
  it("Should trigger onclick function", () => {
    const onClickFn = jest.fn();
    render(<PrimaryButton onClick={onClickFn} />);
    userEvent.click(screen.getByRole("button"));
    // 1回だけ呼び出されること
    expect(onClickFn).toHaveBeenCalledTimes(1);
  });
});

describe("toggle disabled", () => {
  it("not disabled", () => {
    render(<PrimaryButton disabled={false} />);
    expect(screen.getByRole("button")).toBeTruthy();
    expect(screen.getByRole("button").attributes).not.toHaveProperty(
      "disabled"
    );
  });

  it("disabled", () => {
    render(<PrimaryButton disabled={true} />);
    expect(screen.getByRole("button")).toBeTruthy();
    expect(screen.getByRole("button").attributes).toHaveProperty("disabled");
  });
});
