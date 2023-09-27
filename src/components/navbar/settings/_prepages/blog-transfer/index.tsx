import type { FC } from "react";
import Medium from "./platforms/medium";
import Quora from "./platforms/quora";
import HubPages from "./platforms/hub-pages";
import Blogger from "./platforms/blogger";

const BlogTransfer: FC = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">Blog Transfer</h1>
      <div className="mt-6">
        <h3>Choose a platfom</h3>
        <div className="mt-6 flex flex-col gap-3">
          <Medium />
          <Quora />
          <HubPages />
          <Blogger />
        </div>
      </div>
    </>
  );
};

export default BlogTransfer;
