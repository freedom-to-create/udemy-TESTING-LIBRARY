import OrderOptions from "../OrderOptions";
import { render, screen } from "@testing-library/react";

describe("OrderOptions", () => {
  describe("Scoops", () => {
    it("should render scoop images", async () => {
      render(<OrderOptions optionsType="scoops" />);

      const scoopPostfixRegexp = /_scoop$/i;
      const scoopImages = await screen.findAllByRole("img", {
        name: scoopPostfixRegexp,
      });
      expect(scoopImages).toHaveLength(2);
      expect(
        scoopImages.every((img) => img.alt.match(scoopPostfixRegexp))
      ).toBe(true);
    });
  });
});
