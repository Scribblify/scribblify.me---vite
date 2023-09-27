import Navbar from "@/components/navbar";
import Home from "@/components/pages/home";
import NotFound from "@/components/pages/not-found";
import Profile from "@/components/pages/profile";
import type { FC } from "react";
import { Route, Routes } from "react-router-dom";

const Root: FC = () => {
  return (
    <Routes>
      <Route element={<Navbar />} path="/">
        <Route index element={<Home />} />
        <Route path="/:username" element={<Profile />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Root;
