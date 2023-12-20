import App from "./App";
import { render, screen } from "@testing-library/react";

test("adds 1 + 2 to equal 3", () => {
  render(<App />);
  console.log(screen.getByRole("button", { name: /backwards/i }));
});
