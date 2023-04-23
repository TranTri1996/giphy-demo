import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchBar } from "./SearchBar";

describe("SearchBar", () => {
  const onChange = jest.fn();
  const onSearch = jest.fn();

  beforeEach(() => {
    render(<SearchBar onChange={onChange} onSearch={onSearch} />);
  });

  test("renders search input and button", () => {
    const searchInput = screen.getByPlaceholderText("Search GIFs");
    const searchButton = screen.getByRole("button");
    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  test("calls onChange when search input value changes", () => {
    const searchInput = screen.getByPlaceholderText("Search GIFs");
    const inputValue = "cats";

    userEvent.type(searchInput, inputValue);

    expect(onChange).toHaveBeenCalledTimes(inputValue.length);
  });

  test("calls onSearch when search button is clicked", () => {
    const searchInput = screen.getByPlaceholderText("Search GIFs");
    const searchButton = screen.getByRole("button");

    const inputValue = "dogs";
    userEvent.type(searchInput, inputValue);

    userEvent.click(searchButton);

    expect(onSearch).toHaveBeenCalledTimes(1);
  });
});
