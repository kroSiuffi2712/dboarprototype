import { useState } from "react";
import { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import {
  MessageOutlined,
  FormOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useAppDispatch } from "../store/store";
import { logout } from "../features/authenticationSlice";
import { resetCommentState } from "../features/commentsSlice";

const useCustomLayout = () => {
  const [breadcrumbLabel, setBreadcrumbLabel] = useState("Comments");
  const navigate = useNavigate();
  type MenuItem = Required<MenuProps>["items"][number];
  const dispatch = useAppDispatch();

  const items: MenuItem[] = [
    { label: "Comments", key: "1", icon: <FormOutlined /> },
    { label: "Chats", key: "2", icon: <MessageOutlined /> },
    { label: "Logout", key: "3", icon: <LogoutOutlined /> },
  ];

  const handleClick = (e: { key: string; keyPath: any[]; domEvent: any }) => {
    switch (e.key) {
      case "1":
        setBreadcrumbLabel("Comments");
        navigate("/comments");
        break;
      case "2":
        setBreadcrumbLabel("Chats");
        navigate("/chats");
        break;
      case "3":
        dispatch(logout());
        dispatch(resetCommentState())
        break;
      default:
        setBreadcrumbLabel("Comments");
        navigate("/comments");
    }
  };

  const breadcrumbItems = [
    {
      title: "Dashboard",
    },
    {
      title: breadcrumbLabel,
    },
  ];

  return { breadcrumbLabel, items, handleClick, breadcrumbItems };
};
export default useCustomLayout;
