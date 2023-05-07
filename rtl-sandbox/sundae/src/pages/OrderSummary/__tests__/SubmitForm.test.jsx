import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SubmitForm from "../SubmitForm";

describe("SubmitForm", () => {
  describe("TOC checkbox and submit button availability", () => {
    it("'agree with TOC' checkbox should be unchecked and submit button should be disabled on default", () => {
      render(<SubmitForm />);
      const button = screen.getByRole("button", { name: "Confirm order" });
      const checkbox = screen.getByRole("checkbox", {
        name: "I agree to Terms and Conditions",
      });

      expect(button).toBeDisabled();
      expect(checkbox).not.toBeChecked();
    });

    it("'agree with TOC' checkbox checks on click and unchecks on another click", async () => {
      const user = userEvent.setup();
      render(<SubmitForm />);
      const checkbox = screen.getByRole("checkbox", {
        name: "I agree to Terms and Conditions",
      });

      await user.click(checkbox);
      expect(checkbox).toBeChecked();

      await user.click(checkbox);
      expect(checkbox).not.toBeChecked();
    });

    it("Submit button should get disabled/enabled as the TOC checkbox unchecks/checks respectively", async () => {
      const user = userEvent.setup();
      render(<SubmitForm />);
      const button = screen.getByRole("button", { name: "Confirm order" });
      const checkbox = screen.getByRole("checkbox", {
        name: "I agree to Terms and Conditions",
      });

      await user.click(checkbox);
      expect(button).toBeEnabled();

      await user.click(checkbox);
      expect(button).toBeDisabled();
    });
  });

  describe("TOC popover", () => {
    it("Popover should not be present by default", () => {
      render(<SubmitForm />);
      const popover = screen.queryByText("No ice cream will actually be delivered");

      expect(popover).not.toBeInTheDocument();
    });
    it("Popover should appear/disappear on mouse hover/unhover respectively", async () => {
      const user = userEvent.setup();
      render(<SubmitForm />);

      const termsAndConditionsLink = screen.getByText("Terms and Conditions");
      await user.hover(termsAndConditionsLink);
      const popover = screen.getByRole("tooltip", { innerText: "No ice cream will actually be delivered" });
      expect(popover).toBeInTheDocument();

      await user.unhover(termsAndConditionsLink);
      expect(popover).not.toBeInTheDocument();
    });
  });
});
