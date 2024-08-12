import { Entity } from "electrodb"; // ORM(Object relation mapping) // Adapter on adapter

import { client } from "../util/dbconnection.js";

const Cart = new Entity(
  {
    model: {
      entity: "Cart",
      version: "1",
      service: "CartService",
    },
    attributes: {
      userId: {
        type: "string",
        required: true,
      },
      products: {
        type: "list",
        items: {
          type: "map",
          properties: {
            productId: {
              type: "string",
              required: true,
            },
            quantity: {
              type: "number",
              required: true,
            },
          },
        },
      },
      totalPrice: {
        type: "number",
        required: true,
      },
    },
    indexes: {
      primary: {
        pk: {
          // highlight-next-line
          field: "pk",
          facets: ["userId"],
        },
        sk: {
          field: "sk",
          facets: [],
        },
      },
    },
  },
  { client, table: "Cart" }
);

export { Cart };
