import { UserOutlined } from "@ant-design/icons";
import { LogoutOutlined } from "@ant-design/icons";
import { Avatar, Popover, Divider, Button, Tooltip } from "antd";
import { user } from "../../../data/user";
import useCustomAvatar from "../../../hooks/useCustomAvatar";

const CustomAvatar = () => {
  const { handleClick } = useCustomAvatar();
  const content = (
    <>
      <p>{`${user.userName} ${user.lastName}`}</p>
      <p>{user.email}</p>
      <Divider />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Tooltip title="Logout">
          <Button
            shape="circle"
            icon={<LogoutOutlined />}
            onClick={handleClick}
          />
        </Tooltip>
      </div>
    </>
  );

  return (
    <>
      <Popover
        placement="bottom"
        content={content}
        style={{ textAlign: "center" }}
      >
        <Avatar
          style={{
            marginLeft: "auto",
            backgroundColor: "darkgray",
            marginRight: 10,
          }}
          size="large"
          icon={<UserOutlined />}
        />
      </Popover>
    </>
  );
};
export default CustomAvatar;
