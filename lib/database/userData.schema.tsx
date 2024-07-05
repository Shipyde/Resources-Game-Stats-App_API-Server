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
    userdata: [
      {
        itemID: {
          type: Number,
          require: true,
        },
        amount: {
          type: Number,
          require: true,
        },
      },
    ],
    UpdateAt: Date,
    createAt: {
      type: Date,
      required: true,
    },
  },
  { _id: true }
);

export default UserDataSchema;
