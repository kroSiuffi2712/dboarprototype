import { Status } from "../enum/status.enum";
import { IError } from "./error.interface";
import { IResponse } from "./response.interface";

export interface ICommentState {
  data: { comments: IComment[] | []; page: number; totalPages: number };
  status: Status;
  error: IError;
}

export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface ICommentResponse extends IResponse {
  comments: IComment[];
}
