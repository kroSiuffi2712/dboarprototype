import { ICredentials } from "../types/interfaces/auth.interface";
import { axiosInstanceMock } from "../utils/apiMock";

export const login = async({ email, password }: ICredentials) => {
  const response = await axiosInstanceMock(email, password);
  return response;
};
