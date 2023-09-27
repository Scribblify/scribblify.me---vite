import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import type { FC } from "react";

const MyFeed: FC = () => {
  return (
    <div className="w-[600px] m-auto flex flex-col items-center mt-8 max-sm:w-[90%] max-sm:m-auto">
      <h1 className="text-4xl font-bold">My Feed</h1>
      <p className="text-sm font-normal mt-3 text-center">
        There either has been no new posts, or you {"don't"} follow anyone.
      </p>
      <div className="flex relative w-[500px] mt-8 max-sm:w-full">
        <Search
          width="24"
          height="24"
          strokeWidth="1.5"
          className="absolute bottom-[12px] left-[10px] w-[20px] h-[20px]"
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

export default MyFeed;
