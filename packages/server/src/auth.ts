import jwt from "jsonwebtoken";
import User from "./models/User";

export async function getUser(token: string | undefined) {
  if (!token) return { user: null };

  try {
    const decodedToken: any = jwt.verify(token, "batman");

    const user = await User.findOne({ _id: decodedToken.id });

    return {
      user,
    };
  } catch (err) {
    return { user: null };
  }
}

type UserType = {
  _id: string;
};

export function generateToken(user: UserType) {
  return jwt.sign({ id: user._id }, "batman");
}
