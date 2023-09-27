import type { FC } from "react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Member from "./customs/member";

const Members: FC = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">Members</h1>
      <p className="mt-3 font-normal text-sm text-[#a8a6a6]">
        You can invite others to make posts in this blog
      </p>
      <div className="my-6">
        <Input placeholder="Send an invitation" />
      </div>
      <div>
        <h3 className="mb-2">Members List</h3>
        <Separator />
        <div className="mt-6">
          <Member />
        </div>
      </div>
    </>
  );
};

export default Members;
