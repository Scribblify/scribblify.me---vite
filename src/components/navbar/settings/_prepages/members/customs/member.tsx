import type { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Member: FC = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2">
        <Avatar className="w-[25px] h-[25px] cursor-pointer">
          <AvatarImage src={"https://github.com/scribblify.png"} />
          <AvatarFallback className="bg-[#CC6566] text-white font-semibold text-[12px] dark:bg-[#CC6566] dark:border-[#2B2B2C]">
            A
          </AvatarFallback>
        </Avatar>
        <p className="text-sm font-normal">@abduvoitov</p>
      </div>
      <Select disabled>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select role" />
        </SelectTrigger>
        <SelectContent defaultValue={"system-settings"}>
          <SelectGroup>
            <SelectLabel>Role</SelectLabel>
            <SelectItem value="can-write">Can Write</SelectItem>
            <SelectItem value="make-admin">Make admin</SelectItem>
            <SelectItem value="remove">Remove</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Member;
