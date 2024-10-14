import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { ICustomSiderProps } from "../../../types/interfaces/components/layout.interfacer";


const CustomSider: React.FC<ICustomSiderProps> = ({
  collapsed,
  setCollapsed,
  items,
  handleClick
}) => {
  return (
    <Sider
      theme="light"
      collapsible
      collapsed={collapsed}
      onCollapse={setCollapsed}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="light"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
        onClick={handleClick}
      />
    </Sider>
  );
};
export default CustomSider;
