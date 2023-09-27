import { Button } from "@/components/ui/button";
import type { FC } from "react";

const Apple: FC = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <div className="w-[32px] h-[32px] bg-[#000000] flex justify-center items-center rounded-full text-white p-2">
          
        </div>
        <div>
          <h3>Apple</h3>
        </div>
      </div>
      <Button variant={"link"}>Add</Button>
    </div>
  );
};

export default Apple;
