import { Schema } from "mongoose";

export const MarktDataSchema = new Schema(
  {
    marketData: [
      {
        itemID: {
          type: Number,
          required: true,
        },
        KIPrice: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        unixts: {
          type: Number,
          required: true,
        },
      },
    ],
    createAt: {
      type: Date,
      required: true,
    },
  },
  { _id: true }
);

export default MarktDataSchema;
