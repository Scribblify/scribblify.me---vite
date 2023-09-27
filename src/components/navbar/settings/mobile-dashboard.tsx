import type { FC } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IconRendererWithText } from "@/generic/icon-renderer";
import Dashboard from "./dashboard";
import { Menu } from "lucide-react";

const MobileDashboard: FC = () => {
  return (
    <div className="max-md:flex hidden">
      <Popover>
        <PopoverTrigger>
          <IconRendererWithText>
            <Menu width="24" height="24" strokeWidth="1.5" />
            <h3 className="text-[14px] font-medium">Settings</h3>
          </IconRendererWithText>
        </PopoverTrigger>
        <PopoverContent>
          <Dashboard />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default MobileDashboard;
