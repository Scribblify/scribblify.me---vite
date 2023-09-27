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
import { Languages } from "lucide-react";

const Locale: FC = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <div className="w-[32px] h-[32px] bg-[#eb474f] flex justify-center items-center rounded-full text-white p-2">
          <Languages width="24" height="24" strokeWidth="2" />
        </div>
        <div>
          <h3>Language</h3>
        </div>
      </div>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Languages</SelectLabel>
            <SelectItem value="english" defaultChecked>
              English
            </SelectItem>
            <SelectItem value="russian" disabled>
              Russian
            </SelectItem>
            <SelectItem value="uzbek" disabled>
              Uzbek
            </SelectItem>
            <SelectItem value="arabic" disabled>
              عربي
            </SelectItem>
            <SelectItem value="turkish" disabled>
              Türkçe
            </SelectItem>
            <SelectItem value="korean" disabled>
              한국인
            </SelectItem>
            <SelectItem value="spanish" disabled>
              Española
            </SelectItem>
            <SelectItem value="french" disabled>
              Français
            </SelectItem>
            <SelectItem value="german" disabled>
              Deutsch
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Locale;
