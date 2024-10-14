import { useEffect, useState } from "react";
import { message } from "antd";
import { IComment } from "../types/interfaces/comment.interface";
import useCustomModal from "./useCustomModal";
import { comment } from "../data/initialState/comment";
import { RootState, useAppDispatch } from "../store/store";
import { fetchComments } from "../features/commentsSlice";
import { useSelector } from "react-redux";
import { Status } from "../types/enum/status.enum";

const useComment = () => {
  const commentsState = useSelector((state: RootState) => state.comments);
  const { isModalOpen, showModal, handleCancel } = useCustomModal();
  const [selectedItem, setSelectedItem] = useState<IComment>(comment);
  const ContainerHeight = 410;
  const limit = 50;
  const dispatch = useAppDispatch();

  const handleClick = (item: IComment) => {
    setSelectedItem(item);
    showModal();
  };

  useEffect(() => {
    if (!commentsState.data.comments.length)
      dispatch(fetchComments({ page: 1, limit: limit }));
  }, [dispatch, commentsState.data]);

  useEffect(() => {
    if (commentsState.data.page) {
      message.success(`${limit} more items loaded!`);
    }
  }, [commentsState.data.page]);

  const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    if (commentsState.data.comments.length < commentsState.data.totalPages) {
      dispatch(
        fetchComments({ page: commentsState.data.page + 1, limit: limit })
      );
    }
  };

  const loadingMore =
    commentsState.status === Status.loading &&
    commentsState.data.comments.length < commentsState.data.totalPages;

  const loading = commentsState.status === Status.loading;

  return {
    ContainerHeight,
    onScroll,
    handleClick,
    isModalOpen,
    showModal,
    handleCancel,
    selectedItem,
    commentsState,
    loadingMore,
    loading
  };
};
export default useComment;
