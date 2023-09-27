import { Button } from "@/components/ui/button";
import type { FC } from "react";

const Gmail: FC = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <div className="w-[32px] h-[32px] bg-[#000000] flex justify-center items-center rounded-full text-white p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-at-sign"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
          </svg>
        </div>
        <div>
          <h3>Email</h3>
        </div>
      </div>
      <Button variant={"link"}>Add</Button>
    </div>
  );
};

export default Gmail;
