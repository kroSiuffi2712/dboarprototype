import { Breadcrumb, Layout } from "antd";
import { ContentLayoutProps } from "../../../types/interfaces/components/layout.interfacer";
const { Content } = Layout;


const ContentLayout: React.FC<ContentLayoutProps> = ({
  children,
  breadcrumbItems,
  colorBgContainer,
  borderRadiusLG
}) => {
  return (
    <Content style={{ margin: "0 16px" }}>
      <Breadcrumb style={{ margin: "16px 0" }} items={breadcrumbItems} />
      <div
        style={{
          padding: 24,
          minHeight: 360,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        {children}
      </div>
    </Content>
  );
};
export default ContentLayout;
