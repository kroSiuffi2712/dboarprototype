import { Status } from "../../types/enum/status.enum";
import { IAuthState } from "../../types/interfaces/auth.interface";

export const initialState: IAuthState = {
  data: {
    id: 0,
    userName: "",
    lastName: "",
    email: "",
    password: "",
    token: "",
    isAuthenticated:false
  },
  status: Status.idle,
  error: {
    success: false,
    message: "",
  },
};
