import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { FC } from "react";

const Navigation: FC = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">Navigation</h1>
      <div className="mt-6">
        <Label htmlFor="navigation-name">Create a navigation</Label>
        <div className="flex gap-2 mt-3">
          <Input id={"navigation-name"} placeholder="Name" />
          <Input placeholder="Link to" />
          <Button className="rounded-2xl">Add</Button>
        </div>
        <p className="mt-3 font-normal text-sm text-[#a8a6a6]">
          Create links on your {"blog's"} home page to any Teletype post,
          category or an outside resource — an easy and excellent way to create
          your own navigation menu.
        </p>
        <p className="mt-3 font-normal text-sm text-[#a8a6a6]">
          Limited to 15 links.
        </p>
      </div>
    </>
  );
};

export default Navigation;
