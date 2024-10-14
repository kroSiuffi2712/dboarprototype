import { Status } from "../../types/enum/status.enum";
import { ICommentState } from "../../types/interfaces/comment.interface";

export const initialState: ICommentState = {
  data: {
    comments: [],
    page: 0,
    totalPages: 0,
  },
  status: Status.idle,
  error: {
    success: false,
    message: "",
  },
};
