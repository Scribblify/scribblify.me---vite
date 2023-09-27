import type { FC } from "react";
import Author from "./author";

const FeaturedAuthors: FC = () => {
  return (
    <div className="w-[600px] m-auto rounded-3xl bg-[#FFFFFF] dark:bg-[#232323] mt-[50px] max-sm:w-[90%] p-4">
      <h1 className="text-1xl font-bold">Featured authors</h1>
      <div className="pl-4 mt-6">
        <Author />
        <Author />
      </div>
    </div>
  );
};

export default FeaturedAuthors;
