import { render, screen } from "@testing-library/react";
import { rest } from "msw";

import { server } from "../../../mocks/server";
import { BASE_URL, ENDPOINTS } from "../../../constants/api";

import CreateOrder from "../";

describe("CreateOrder", () => {
  describe("AlertBanner", () => {
    it("should render AlertBanner upon error cb is triggered on scoops request, no images displayed", async () => {
      server.use(
        rest.get(`${BASE_URL}/${ENDPOINTS.scoops}`, (req, res, ctx) =>
          res.once(ctx.status(503))
        )
      );

      render(<CreateOrder />);

      const alertBanner = await screen.findByRole("alert", {
        innerText: /^Oops... Something want wrong!.+/,
      });
      expect(alertBanner).toBeInTheDocument();

      const images = screen.queryByRole("img", {
        name: /(_scoop)|(_topping)$/,
      });
      expect(images).not.toBeInTheDocument();
    });
    it("should render AlertBanner upon error cb is triggered on toppings request, no images displayed", async () => {
      server.use(
        rest.get(`${BASE_URL}/${ENDPOINTS.toppings}`, (req, res, ctx) =>
          res.once(ctx.status(503))
        )
      );

      render(<CreateOrder />);

      const alertBanner = await screen.findByRole("alert", {
        innerText: /^Oops... Something want wrong!.+/,
      });
      expect(alertBanner).toBeInTheDocument();

      const images = screen.queryByRole("img", {
        name: /(_scoop)|(_topping)$/,
      });
      expect(images).not.toBeInTheDocument();
    });
  });
});
