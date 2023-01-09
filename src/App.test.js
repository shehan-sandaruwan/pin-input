import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import ToastMessage from "./compound/ToastMessage";

test("Initial render, first input box should be focused", async () => {
  render(<App />);
  const inputItems = screen.queryAllByTestId("pin-input");

  if (inputItems.length) {
    let firstInput = inputItems[0];
    expect(firstInput).toHaveFocus();
  }
});

test("Number of input boxes count should be equal to pin length", () => {
  const pin = "13456";

  render(<App />);
  const inputItems = screen.queryAllByTestId("pin-input");

  expect(inputItems.length).toEqual(pin.length);
});

test("Initial render verify button should be disabled", () => {
  const { container } = render(<App />);
  const verifyButton = container.querySelector('[data-state-btn="not-allow"]');

  expect(verifyButton).toBeInTheDocument();
});

test("User should be able to see success message when successfully insert the pin value", async () => {
  render(<ToastMessage message={"Success !"} severity={"success"} />);

  expect(await screen.findByText("Success !")).toBeInTheDocument();
});
