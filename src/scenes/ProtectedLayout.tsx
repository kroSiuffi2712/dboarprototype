import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { RootState } from "../store/store";
import Layout from "../components/layout/Layout";

const ProtectedLayout: React.FC = () => {
  const auth = useSelector((state: RootState) => state.auth);

  if (!auth.data.isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default ProtectedLayout;
