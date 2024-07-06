import { Schema } from "mongoose";

export const MarktDataSchema = new Schema(
  {
    marketData: [
      {
        itemID: {
          type: Number,
          required: true,
        },
        KIprice: {
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
        _id: false,
      },
    ],
    createdAt: {
      type: Date,
      required: true,
    },
  },
  { _id: true, versionKey: false }
);

export default MarktDataSchema;
