import { Footer } from "antd/es/layout/layout";

const FooterLayout = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      Desing by Carolina Ruiz ©{new Date().getFullYear()}
    </Footer>
  );
};
export default FooterLayout;
