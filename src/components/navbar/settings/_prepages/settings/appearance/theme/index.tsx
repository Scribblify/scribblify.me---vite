import type { FC } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Palette } from "lucide-react";

const Theme: FC = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <div className="w-[32px] h-[32px] bg-[#5ca2f1] flex justify-center items-center rounded-full text-white p-2">
          <Palette width="24" height="24" strokeWidth="2" />
        </div>
        <div>
          <h3>Color Theme</h3>
        </div>
      </div>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select theme" />
        </SelectTrigger>
        <SelectContent defaultValue={"system-settings"}>
          <SelectGroup>
            <SelectLabel>Theme</SelectLabel>
            <SelectItem value="system-settings">System settings</SelectItem>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Theme;
