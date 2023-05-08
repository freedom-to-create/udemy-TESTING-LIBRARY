import { rest } from "msw";

import { BASE_URL, ENDPOINTS } from "../constants/api";

export const handlers = [
  rest.get(`${BASE_URL}/${ENDPOINTS.scoops}`, (req, res, ctx) =>
    res(
      ctx.json([
        {
          name: "Vanilla",
          imagePath: "/images/vanilla.png",
        },
        {
          name: "Chocolate",
          imagePath: "/images/chocolate.png",
        },
      ])
    )
  ),

  rest.get(`${BASE_URL}/${ENDPOINTS.toppings}`, (req, res, ctx) =>
    res(
      ctx.json([
        {
          name: "M&Ms",
          imagePath: "/images/m-and-ms.png",
        },
        {
          name: "Hot fudge",
          imagePath: "/images/hot-fudge.png",
        },
        {
          name: "Cherries",
          imagePath: "/images/cherries.png",
        },
      ])
    )
  ),
];
