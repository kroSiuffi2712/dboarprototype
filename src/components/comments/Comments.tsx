import React from "react";
import { Avatar, Button, List } from "antd";
import VirtualList from "rc-virtual-list";
import { EyeOutlined } from "@ant-design/icons";
import Item from "antd/es/list/Item";

import CustomModal from "../modals/CustomModal";
import { getRandomColor } from "../../utils/functions/colors";
import useComment from "../../hooks/useComment";
import { IComment } from "../../types/interfaces/comment.interface";
import CommentInfo from "./CommentInfo";
import LoadMoreButton from "./LoadMore";

const Comments: React.FC = () => {
  const {
    ContainerHeight,
    onScroll,
    handleClick,
    isModalOpen,
    showModal,
    handleCancel,
    selectedItem,
    commentsState,
    loadingMore,
  } = useComment();

  return (
    <>
      <CustomModal
        isModalOpen={isModalOpen}
        showModal={showModal}
        handleCancel={handleCancel}
        ContentComponent={CommentInfo}
        Contentprops={selectedItem}
      />
      <List
        loadMore={
          <LoadMoreButton
            loading={
              loadingMore
            }
            handleClick={onScroll}
          />
        }
      >
        <VirtualList
          data={commentsState.data.comments}
          height={ContainerHeight}
          itemHeight={10}
          itemKey="email"
        >
          {(item: IComment, index) => (
            <List.Item key={item.email}>
              <Item.Meta
                avatar={
                  <Avatar
                    style={{
                      backgroundColor: getRandomColor(index),
                      color: "black",
                    }}
                  >
                    {item.name.charAt(1).toLocaleUpperCase()}
                  </Avatar>
                }
              />
              <Item.Meta description={item.id} />
              <Item.Meta description={item.name} />
              <Item.Meta description={item.email} />
              <Button
                style={{ marginRight: 20 }}
                shape="circle"
                icon={<EyeOutlined onClick={() => handleClick(item)} />}
              />
            </List.Item>
          )}
        </VirtualList>
      </List>
    </>
  );
};

export default Comments;
