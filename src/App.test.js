import { render, screen } from "@testing-library/react";
import App from "./App";
import ToastMessage from "./compound/ToastMessage";

test("User should be able to see success message when successfully insert the pin value", async () => {
  render(<ToastMessage message={"Success !"} severity={"success"} />);
  render(<App />);
  expect(await screen.findByText("Success !")).toBeInTheDocument();
});
