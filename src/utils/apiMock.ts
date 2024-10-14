import { IAuthResponse } from "../types/interfaces/auth.interface";

export const axiosInstanceMock = async (email: string, password: string): Promise<IAuthResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "prologin@prologin.com" && password === "ProLogin123456") {
        resolve({
          success: true,
          message: "Login successful",
          user: {
            id: 1,
            userName: "Pro",
            lastName: "Login",
            email: "prologin@prologin.com",
            password: "",
            token: "zpGCmFC3BupK1ZhGPPt4QtdMAYob8LTTqAPXkttwRC8vYjmkdcycoz7hgV5tSEPi",
          },
        });
      } else {
        reject({
          success: false,
          message: "Invalid email or password",
          user: {
            id: null,
            userName: null,
            lastName: null,
            email: null,
            password: null,
            token: null,
          },
        });
      }
    }, 1000);
  });
};