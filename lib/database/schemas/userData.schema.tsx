import { Schema } from "mongoose";

export const UserDataSchema = new Schema(
  {
    uuid: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    userData: [
      {
        itemID: {
          type: Number,
          require: true,
        },
        amount: {
          type: Number,
          require: true,
        },
        strike: Boolean,
        _id: false,
      },
    ],
    updatedAt: Date,
    createdAt: {
      type: Date,
      required: true,
    },
  },
  { _id: true, versionKey: false }
);

export default UserDataSchema;
