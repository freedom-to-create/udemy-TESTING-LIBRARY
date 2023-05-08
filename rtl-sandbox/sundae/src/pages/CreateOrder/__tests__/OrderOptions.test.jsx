import OrderOptions from "../OrderOptions";
import { render, screen } from "@testing-library/react";

import { ENDPOINTS } from "../../../constants/api";

describe("OrderOptions", () => {
  describe("Scoops", () => {
    it("should render scoop images", async () => {
      render(<OrderOptions optionsType={ENDPOINTS.scoops} />);

      const EXPECTED_IMG_ALTS = ["Vanilla_scoop", "Chocolate_scoop"];

      const scoopPostfixRegexp = /_scoop$/i;
      const scoopsImages = await screen.findAllByRole("img", {
        name: scoopPostfixRegexp,
      });

      expect(scoopsImages).toHaveLength(2);
      expect(scoopsImages.map(({ alt }) => alt)).toEqual(EXPECTED_IMG_ALTS);
    });
  });

  describe("Toppings", () => {
    it("should render toppings images", async () => {
      render(<OrderOptions optionsType={ENDPOINTS.toppings} />);

      const EXPECTED_IMG_ALTS = [
        "M&Ms_topping",
        "Hot fudge_topping",
        "Cherries_topping",
      ];

      const toppingPostfixRegexp = /_topping$/i;
      const toppingsImages = await screen.findAllByRole("img", {
        name: toppingPostfixRegexp,
      });

      expect(toppingsImages).toHaveLength(3);
      expect(toppingsImages.map(({ alt }) => alt)).toEqual(EXPECTED_IMG_ALTS);
    });
  });
});
