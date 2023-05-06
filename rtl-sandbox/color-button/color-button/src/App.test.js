import { render, screen, fireEvent } from "@testing-library/react";
import App, { transformCamelCaseColorNameToSpaced } from "./App";

test("button has correct initial color", () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to midnight Blue'
  const colorButton = screen.getByRole("button", {
    name: "Change to midnight Blue",
  });

  // expect the background color to be mediumVioletRed
  expect(colorButton).toHaveStyle({ backgroundColor: "mediumVioletRed" });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "midnightBlue" });

  // expect the button text to be 'Change to mediumVioletRed'
  expect(colorButton).toHaveTextContent("Change to medium Violet Red");
});

test("initial conditions", () => {
  render(<App />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", {
    name: "Change to midnight Blue",
  });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

describe("Checkbox functionality", () => {
  it("Checkbox disables button on first click and enables on second click", () => {
    render(<App />);

    const checkbox = screen.getByRole("checkbox");
    const button = screen.getByRole("button");

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(button).toBeDisabled();

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(button).toBeEnabled();
  });

  describe("Grey color indicates button disabled state", () => {
    it("Red button should turn grey when checkbox is checked once and turn back to mediumVioletRed once the checkbox gets unchecked", () => {
      render(<App />);

      const checkbox = screen.getByRole("checkbox");
      const button = screen.getByRole("button");
      expect(button).toHaveStyle({ "background-color": "mediumVioletRed" });

      fireEvent.click(checkbox);
      expect(checkbox).toBeChecked();
      expect(button).toBeDisabled();
      expect(button).toHaveStyle({ "background-color": "grey" });

      fireEvent.click(checkbox);
      expect(checkbox).not.toBeChecked();
      expect(button).toBeEnabled();
      expect(button).toHaveStyle({ "background-color": "mediumVioletRed" });
    });

    it("mediumVioletRed button should turn blue once clicked then should turn grey once checkbox gets checked then set back to midnightBlue once the checkbox is unchecked", () => {
      render(<App />);

      const checkbox = screen.getByRole("checkbox");
      const button = screen.getByRole("button");
      expect(button).toHaveStyle({ "background-color": "mediumVioletRed" });

      fireEvent.click(button);
      expect(checkbox).not.toBeChecked();
      expect(button).toBeEnabled();
      expect(button).toHaveStyle({ "background-color": "midnightBlue" });

      fireEvent.click(checkbox);
      expect(checkbox).toBeChecked();
      expect(button).toBeDisabled();
      expect(button).toHaveStyle({ "background-color": "grey" });

      fireEvent.click(checkbox);
      expect(checkbox).not.toBeChecked();
      expect(button).toBeEnabled();
      expect(button).toHaveStyle({ "background-color": "midnightBlue" });
    });
  });
});
describe("Replace camel case color by spaced colors", () => {
  it("Should return color as is if there're no inner capital letters in color name", () => {
    expect(transformCamelCaseColorNameToSpaced("red")).toMatch("red");
  });
  it("Should return spaced color name than there's one inner capital letter in color name", () => {
    expect(transformCamelCaseColorNameToSpaced("midnightBlue")).toMatch(
      "midnight Blue"
    );
  });
  it("Should return spaced color name than there're few inner capital letter in color name", () => {
    expect(transformCamelCaseColorNameToSpaced("mediumVioletRed")).toMatch(
      "medium Violet Red"
    );
  });
});
