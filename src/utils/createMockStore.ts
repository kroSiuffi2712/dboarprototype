import { configureStore } from "@reduxjs/toolkit";
import { IAuthState } from "../types/interfaces/auth.interface";
import { ICommentState } from "../types/interfaces/comment.interface";
import { Status } from "../types/enum/status.enum";
import authReducer from "../features/authenticationSlice";
import commentsReducer from "../features/commentsSlice";

export const initialAuthState: IAuthState = {
  data: {
    id: 1,
    userName: "Pro",
    lastName: "Login",
    email: "prologin@prologin.com",
    password: "ProLogin123456",
    token: "dhdhv539skxc29x0020xlj",
    isAuthenticated: true,
  },
  status: Status.succeeded,
  error: {
    success: false,
    message: "",
  },
};

export const initialCommentState: ICommentState = {
  data: {
    comments: [
      {
        postId: 1,
        id: 1,
        name: "id labore ex et quam laborum",
        email: "Eliseo@gardner.biz",
        body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
      },
      {
        postId: 1,
        id: 2,
        name: "quo vero reiciendis velit similique earum",
        email: "Jayne_Kuhic@sydney.com",
        body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
      },
      {
        postId: 1,
        id: 3,
        name: "odio adipisci rerum aut animi",
        email: "Nikita@garfield.biz",
        body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
      },
    ],
    page: 1,
    totalPages: 3,
  },
  status: Status.succeeded,
  error: {
    success: false,
    message: "",
  },
};

export const createMockStore = (
  initialAuthState: IAuthState,
  initialCommentState: ICommentState
) => {
  return configureStore({
    reducer: {
      auth: authReducer,
      comments: commentsReducer,
    },
    preloadedState: {
      auth: initialAuthState,
      comments: initialCommentState,
    },
  });
};
