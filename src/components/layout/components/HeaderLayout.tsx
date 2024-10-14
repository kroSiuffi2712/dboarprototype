import { Header } from "antd/es/layout/layout";
import { theme } from "antd";
import CustomAvatar from "../../user/avatar/CustomAvatar";


const HeaderLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 0,
        background: colorBgContainer,
      }}
    >
      <CustomAvatar />
    </Header>
  );
};
export default HeaderLayout;
