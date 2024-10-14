import React from "react";
import { RadiusBottomrightOutlined } from "@ant-design/icons";
import { Button, notification } from "antd";
import type { NotificationArgsProps } from "antd";
import { INotificationProps } from "../../types/interfaces/components/notification";

type NotificationPlacement = NotificationArgsProps["placement"];

const Notification: React.FC<INotificationProps> = ({
  message,
  description,
  placement,
}) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message,
      description,
      placement,
    });
  };

  return (
    <>
      {contextHolder}
      <Button
        type="primary"
        onClick={() => openNotification("bottomRight")}
        icon={<RadiusBottomrightOutlined />}
      >
        bottomRight
      </Button>
    </>
  );
};

export default Notification;
