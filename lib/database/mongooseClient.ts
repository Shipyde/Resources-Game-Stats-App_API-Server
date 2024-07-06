import MarketDataSchema from "@/lib/database/schemas/marketData.schema";
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
  const MarketData =
    mongoose.models.MarkeetData ||
    mongoose.model("MarketData", MarketDataSchema);
  const Token = mongoose.models.Token || mongoose.model("Token", TokenSchema);

  return {
    client,
    UserData,
    MarketData,
    Token,
  };
};

export async function mongooseClientDisconnect() {
  await mongoose.disconnect();
  if (mongoose.connection.readyState === 0) {
    console.log("MongoDB successfully disconnected");
  } else {
    console.log("Error by disconnecting from MongoDB");
  }
}
