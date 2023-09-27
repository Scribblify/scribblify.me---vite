import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import type { FC } from "react";

const Posts: FC = () => {
  return (
    <div className="w-[60%] max-lg:w-[60%] max-md:w-full">
      <div className="flex relative w-[500px] mt-[30px] max-lg:w-full">
        <Search
          width="20"
          height="20"
          strokeWidth="1.5"
          className="absolute bottom-[12px] left-[10px]"
        />

        <Input
          className="rounded-3xl h-[45px] dark:bg-[#232323] placeholder:text-[#949494] dark:placeholder:text-[#5F5F5F] dark:border-[#393939] pl-[35px]"
          placeholder="Search..."
          type="search"
        />
      </div>
    </div>
  );
};

export default Posts;
