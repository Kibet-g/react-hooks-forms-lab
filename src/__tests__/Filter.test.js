import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter";

const noop = () => {};

test("uses a prop of 'searchValue' to display the search term in the input field", () => {
  render(<Filter searchValue="testing" onSearchChange={noop} />);

  expect(screen.queryByPlaceholderText(/Search/).value).toBe("testing");
});

test("calls the onSearchChange callback prop when the input is changed", () => {
  const onChange = jest.fn();
  render(<Filter searchValue="testing" onSearchChange={onChange} />);

  fireEvent.change(screen.queryByPlaceholderText(/Search/), {
    target: { value: "testing123" },
  });

  expect(onChange).toHaveBeenCalled();
});
