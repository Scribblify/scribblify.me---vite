import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import type { FC } from "react";
import { Link } from "react-router-dom";

const Author: FC = () => {
  return (
    <div className="flex mt-[20px]">
      <div className="w-[35px]">
        <Link className="cursor-pointer" to={"/"}>
          <img
            src={
              "https://res.cloudinary.com/dj28bsagl/image/upload/v1692856567/z6t2uku21o4jujy6tyts.jpg"
            }
            alt="scribblify_logo"
            className="w-[32px] h-[32px] rounded-full"
            loading="eager"
          />
        </Link>
      </div>
      <div className="flex pl-2 w-full items-center">
        <div className="cursor-pointer w-full">
          <h3 className="text-base font-bold">Abduvitov Asadbek</h3>
          <p className="text-[#949494] font-normal text-sm">@abduvoitov</p>
          <p className="font-light font-xs">Read. Write. Post. Repeat</p>
        </div>
        <div>
          <Button
            variant="outline"
            className="rounded-3xl bg-transparent hover:bg-transparent dark:bg-transparent dark:border-[#fff] dark:text-[#fff] dark:border dark:hover:bg-transparent"
          >
            <Plus width="24" height="24" strokeWidth="2" />

            <span className="pl-2">Follow</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Author;
