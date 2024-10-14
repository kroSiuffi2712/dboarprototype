import { Route, Routes } from "react-router-dom";
import Auth from "../components/auth/Auth";
import ProtectedLayout from "./ProtectedLayout";
import Comments from "../components/comments/Comments";
import UnderConstruction from "../components/pages/UnderConstruction";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Auth />} />
      <Route path="/" element={<ProtectedLayout />}>
        <Route path="/comments" element={<Comments />} />
        <Route path="/chats" element={<UnderConstruction />} />
      </Route>
      <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
    </Routes>
  );
};
export default CustomRoutes;
