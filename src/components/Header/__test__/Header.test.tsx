import { render, screen } from "@testing-library/react";
import Header from "../index";

describe("Header", () => {
  it("should render header title", () => {
    render(<Header />);
    const h1Element = screen.getByText(/audio player/i);
    expect(h1Element).toBeInTheDocument();
  });
});
