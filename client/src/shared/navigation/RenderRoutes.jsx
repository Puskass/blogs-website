import { Route, Routes } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { nav } from "./navLinks";
import Blogs from "../../pages/Blogs";
import MyBlogs from "../../pages/MyBlogs";

export const RenderRoutes = () => {
  const { token } = useAuth();

  return (
    <Routes>
      {nav.map((r, i) => {
        if (!r.isPrivate || (r.isPrivate && token)) {
          return <Route key={i} path={r.path} element={r.element} />;
        }
        return null;
      })}

      {/* Add your private routes here */}
      {token && (
        <>
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/myblogs" element={<MyBlogs />} />
          {/* Add more private routes as needed */}
        </>
      )}
    </Routes>
  );
};
