import DataLoader from "dataloader";
import UserModel from "../models/User";

export const userLoader = new DataLoader(async (ids) => {
  const users = await UserModel.find({ _id: { $in: ids } });

  const userMap = {};

  users.forEach((user) => {
    userMap[user._id] = user;
  });

  return ids.map((id: string) => userMap[id]);
});
