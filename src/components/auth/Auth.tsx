import React from "react";
import { Button, Form, Input, Card, Image } from "antd";

import logo from "../../assets/image/logo.png";
import "../../assets/css/auth.css";
import useAuth from "../../hooks/useAuth";

const Auth: React.FC = () => {
  const { form, onFinish, contextHolder, loading } = useAuth();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#faf7f6",
      }}
    >
      {contextHolder}
      <Card>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image width={100} src={logo} alt="Logo" preview={false} />
          <h1 style={{ color: "#1b70bb" }}>ProLogin</h1>
        </div>

        <Card style={{ width: 400, boxShadow: "none" }} bordered={false}>
          <Form
            form={form}
            name="basic"
            style={{ maxWidth: 400 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            onFinish={onFinish}
          >
            <Form.Item
              label={
                <span
                  style={{ color: "#1b70bb", fontWeight: "bold", padding: 0 }}
                >
                  Email:
                </span>
              }
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                {
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Please enter a valid email address!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={
                <span
                  style={{ color: "#1b70bb", fontWeight: "bold", padding: 0 }}
                >
                  Password:
                </span>
              }
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
                {
                  pattern: /^[a-zA-Z0-9]{6,}$/,
                  message:
                    "Password must be at least 6 characters long and contain only letters and numbers!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item style={{ textAlign: "right" }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ marginTop: 15 }}
                loading={loading}
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Card>
    </div>
  );
};

export default Auth;
