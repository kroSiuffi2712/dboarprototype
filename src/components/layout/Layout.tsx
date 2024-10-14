import React, { useState } from "react";
import { Layout, theme } from "antd";
import useCustomLayout from "../../hooks/useCustomLayout";
import CustomSider from "./components/CustomSider";
import HeaderLayout from "./components/HeaderLayout";
import ContentLayout from "./components/ContentLayout";
import FooterLayout from "./components/FooterLayout";
import { CustomLayoutProps } from "../../types/interfaces/components/layout.interfacer";

const CustomLayout: React.FC<CustomLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);
  const {items, handleClick, breadcrumbItems } = useCustomLayout();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <CustomSider
        collapsed={collapsed}
        setCollapsed={(value) => setCollapsed(value)}
        items={items}
        handleClick={handleClick}
      />
      <Layout>
        <HeaderLayout />
        <ContentLayout
          children={children}
          breadcrumbItems={breadcrumbItems}
          colorBgContainer={colorBgContainer}
          borderRadiusLG={borderRadiusLG}
        />
        <FooterLayout />
      </Layout>
    </Layout>
  );
};

export default CustomLayout;
