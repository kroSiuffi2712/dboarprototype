import { logout } from "../features/authenticationSlice";
import { resetCommentState } from "../features/commentsSlice";
import { useAppDispatch } from "../store/store";

const useCustomAvatar = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(logout());
    dispatch(resetCommentState())
  };

  return {handleClick};
};
export default useCustomAvatar;
