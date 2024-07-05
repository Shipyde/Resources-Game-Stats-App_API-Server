import MarktDataSchema from "@/lib/database/schemas/marktData.schema";
import TokenSchema from "@/lib/database/schemas/token.schema";
import UserDataSchema from "@/lib/database/schemas/userData.schema";
import mongoose from "mongoose";

const { MONGO_URI } = process.env;

export const mongooseClient = async () => {
  const client = await mongoose
    .connect(MONGO_URI as string)
    .catch((err) => console.log(err));
  console.log(`MongoDB Connected to: ${client?.connection.host}`);

  const UserData =
    mongoose.models.UserData || mongoose.model("UserData", UserDataSchema);
  const MarktData =
    mongoose.models.MarktData || mongoose.model("MarktData", MarktDataSchema);
  const Token = mongoose.models.Token || mongoose.model("Token", TokenSchema);

  return {
    client,
    UserData,
    MarktData,
    Token,
  };
};

export async function mongooseClientDisconnect() {
  const disconnect = await mongoose.disconnect();
  console.log(`MongoDB Disconnected from: ${disconnect}`);
}
