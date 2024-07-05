import { Schema } from "mongoose";

export const TokenSchema = new Schema(
  {
    uuid: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
    for: {
      type: String,
      required: true,
    },
    usedAt: Date,
    createAt: {
      type: Date,
      required: true,
    },
  },
  { _id: true }
);

export default TokenSchema;
