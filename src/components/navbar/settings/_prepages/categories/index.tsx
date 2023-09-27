import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { FC } from "react";

const Categories: FC = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">Categories</h1>
      <div className="mt-6 flex gap-2">
        <Input placeholder="New category..." />
        <Button className="rounded-2xl">Add</Button>
      </div>
      <p className="mt-4 font-normal text-sm text-[#a8a6a6]">
        Sections help designate posts by subject, which helps the reader
        navigate the blog. You can create a maximum of 10 categories. Pick one
        of the suggested category or create your own.
      </p>
    </>
  );
};

export default Categories;
