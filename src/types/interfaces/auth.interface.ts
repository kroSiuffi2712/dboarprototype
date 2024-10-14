import { Status } from "../enum/status.enum";
import { IError } from "./error.interface";
import { IResponse } from "./response.interface";

export interface IAuthState {
  data: IAuth;
  status: Status;
  error: IError;
}

export interface IAuth {
  id: number;
  userName: string;
  lastName: string;
  email: string;
  password: string;
  token: string;
  isAuthenticated?:boolean; 
}

export interface ICredentials {
  email: string;
  password: string;
}

export interface IAuthResponse extends IResponse {
  user: IAuth
}
