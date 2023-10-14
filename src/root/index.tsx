import Navbar from "@/components/navbar";
import Auth from "@/components/pages/auth";
import Home from "@/components/pages/home";
import NotFound from "@/components/pages/not-found";
import Profile from "@/components/pages/profile";
import { useAuth } from "@/tools/auth";
import type { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Root: FC = () => {
  const { isAuthed } = useAuth();
  return (
    <Routes>
      <Route element={<Navbar />} path="/">
        <Route index element={<Home />} />
        <Route path="/:username" element={<Profile />} />
        <Route
          path="/auth"
          element={isAuthed ? <Navigate to={"/"} /> : <Auth />}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Root;
