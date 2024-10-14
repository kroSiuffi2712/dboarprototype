import { Form, FormProps, notification } from "antd";
import { RootState, useAppDispatch } from "../store/store";
import { fetchLogin } from "../features/authenticationSlice";
import { FieldType } from "../types/auth.type";
import { NotificationPlacement } from "antd/es/notification/interface";
import { useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { Status } from "../types/enum/status.enum";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const [api, contextHolder] = notification.useNotification();
  const [form] = Form.useForm<FieldType>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const openNotification = useCallback(
    (placement: NotificationPlacement) => {
      api.error({
        message: "Notification",
        description: auth.error.message,
        placement: placement,
      });
    },
    [api, auth.error]
  );

  useEffect(() => {
    if (auth.data.isAuthenticated) {
      navigate("/comments");
    }
  }, [auth.data.isAuthenticated, navigate]);

  useEffect(() => {
    if (auth.status === Status.failed) {
      openNotification("bottomRight");
    }
  }, [auth.status, openNotification]);

  const onFinish = (value: FieldType) => {
    dispatch(fetchLogin({ email: value.email, password: value.password }));
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const handleClick = () => {
    form
      .validateFields()
      .then((values: FieldType) => {
        console.log("Form values: ", values);
        dispatch(
          fetchLogin({ email: values.email, password: values.password })
        );
      })
      .catch((errorInfo) => {
        console.log("Validation Failed:", errorInfo);
      });
  };

  const loading = auth.status === Status.loading;

  return {
    form,
    onFinish,
    onFinishFailed,
    handleClick,
    contextHolder,
    openNotification,
    loading,
  };
};
export default useAuth;
