import { render, screen, waitFor } from "@testing-library/react";
import Like from "../index";

describe("Like Button", () => {
  it("should render Buttons", async () => {
    render(<Like id="f93b2ffd" />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    await waitFor(() => expect(button).toHaveStyle({ color: "#000000" }));
  });
});
