import React from "react";
import { Button, Modal } from "antd";
import { ICustomModalProps } from "../../types/interfaces/components/modal.interface";

const CustomModal: React.FC<ICustomModalProps> = ({
  isModalOpen,
  handleCancel,
  ContentComponent,
  Contentprops,
}) => {
  return (
    <>
      <Modal
        title="Comment"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="back" type="primary" onClick={handleCancel}>
            Close
          </Button>,
        ]}
      >
        <ContentComponent {...Contentprops} />
      </Modal>
    </>
  );
};

export default CustomModal;
