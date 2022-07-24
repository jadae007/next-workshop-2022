import { SignUp } from "@/models/auth.model";
import axios from "axios";

type signProp = {
  username: string;
  password: string;
};

export const signUp = async (user:signProp): Promise<SignUp> => {
  const response = await axios.post<SignUp>(
    "http://localhost:8085/api/v2/authen/register",
    user
  );
  return response.data;
};
