import { Button } from "@/components/ui/button";
import type { FC } from "react";

const Quora: FC = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-2">
        <div className="w-[35px] h-[35px] rounded-full flex items-center justify-center bg-white p-1 text-red-500">
          Q
        </div>
        <p className="text-sm">Quora</p>
      </div>
      <Button>Publish</Button>
    </div>
  );
};

export default Quora;
