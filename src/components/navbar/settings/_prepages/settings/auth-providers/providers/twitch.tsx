import { Button } from "@/components/ui/button";
import type { FC } from "react";

const Twitch: FC = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <div className="w-[32px] h-[32px] bg-[#8E51FB] flex justify-center items-center rounded-full text-white p-2">
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
            className="lucide lucide-twitch"
          >
            <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" />
          </svg>
        </div>
        <div>
          <h3>Twitch</h3>
        </div>
      </div>
      <Button variant={"link"}>Add</Button>
    </div>
  );
};

export default Twitch;
