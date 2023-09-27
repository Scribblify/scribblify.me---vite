import { Button } from "@/components/ui/button";
import type { FC } from "react";

const Blogger: FC = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-2">
        <div className="w-[35px] h-[35px] rounded-full flex items-center justify-center bg-white p-2 text-red-500">
          <svg
            fill="#000000"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 95.938 95.938"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path d="M95.329,59.861c-0.031-7.134-0.053-12.289-3.562-16.824c-3.975-5.134-10.106-6.004-15.076-6.152 c0.837-3.587,1.079-7.564,0.692-11.863C77.277,10.705,66.624,0.414,51.839,0.006L51.626,0L29.012,0.018l-0.243-0.001 c-8.795,0-15.747,2.626-20.664,7.804c-3.043,3.203-7.085,8.798-7.513,17.845l-0.018,36.48c-0.044,0.689,0.025,1.385,0.016,2.1 c0,10.379,1.661,17.85,6.848,23.371c5.183,5.521,12.847,8.32,22.776,8.32c0.215,0,0.432-0.001,0.649-0.004H65.41h0.082 c8.858-0.074,16.343-2.998,21.646-8.455c5.293-5.447,8.143-13.208,8.24-22.441C95.377,65.037,95.335,61.32,95.329,59.861z M30.846,19.457l19.322-0.023c4.554,0.072,8.188,4.151,8.114,8.705c-0.072,4.509-3.749,7.799-8.242,7.799 c-0.044,0-19.455,0.008-19.455,0.008c-4.554-0.073-8.186-3.823-8.113-8.375C22.544,23.017,26.286,19.413,30.846,19.457z M67.164,73.732H28.521c-4.553,0-8.246-3.691-8.246-8.246c0-4.554,3.693-8.246,8.246-8.246h38.644c4.555,0,8.246,3.692,8.246,8.246 C75.411,70.041,71.719,73.732,67.164,73.732z"></path>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
        <p className="text-sm">Blogger</p>
      </div>
      <Button>Publish</Button>
    </div>
  );
};

export default Blogger;
