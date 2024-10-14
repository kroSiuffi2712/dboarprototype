import React from "react";
import { Result } from "antd";

const UnderConstruction: React.FC = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, This page is under construction."
        extra={
          <p>
            We're working hard to bring you new content. Please check back soon!
          </p>
        }
      />
    </div>
  );
};

export default UnderConstruction;
