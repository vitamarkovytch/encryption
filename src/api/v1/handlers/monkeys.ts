import { Router, Request, Response } from "express";

import { asyncHandler, renderSuccess } from "../../helpers/base";

const monkeysHandler = Router();

monkeysHandler.get(
  "/",
  asyncHandler(async (req: Request, res: Response, next: any) => {
    const monkeys = [
      {
        Name: "Baboon",
        Location: "Africa & Asia",
        Details:
          "Baboons are African and Arabian Old World monkeys belonging to the genus Papio, part of the subfamily Cercopithecinae.",
        Population: 10000,
        Latitude: -8.783195,
        Longitude: 34.508523,
      },
      {
        Name: "Capuchin Monkey",
        Location: "Central & South America",
        Details:
          "The capuchin monkeys are New World monkeys of the subfamily Cebinae. Prior to 2011, the subfamily contained only a single genus, Cebus.",
        Population: 23000,
        Latitude: 12.769013,
        Longitude: -85.602364,
      },
      {
        Name: "Blue Monkey",
        Location: "Central and East Africa",
        Details:
          "The blue monkey or diademed monkey is a species of Old World monkey native to Central and East Africa, ranging from the upper Congo River basin east to the East African Rift and south to northern Angola and Zambia",
        Population: 12000,
        Latitude: 1.957709,
        Longitude: 37.297204,
      },
    ];

    renderSuccess(res, monkeys);
  })
);

export default monkeysHandler;
