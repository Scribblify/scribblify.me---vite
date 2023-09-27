import { Button } from "@/components/ui/button";
import type { FC } from "react";

const Google: FC = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <div className="w-[32px] h-[32px] bg-[#EA4435] flex justify-center items-center rounded-full text-white p-2">
          G
        </div>
        <div>
          <h3>Google</h3>
        </div>
      </div>
      <Button variant={"link"}>Add</Button>
    </div>
  );
};

export default Google;
