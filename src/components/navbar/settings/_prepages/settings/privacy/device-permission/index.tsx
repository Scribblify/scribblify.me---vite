import type { FC } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { AlertCircle } from "lucide-react";

const DevicePermission: FC = () => {
  return (
    <div className="flex items-center space-x-2 mt-3">
      <Switch defaultChecked id="airplane-mode" />
      <Label htmlFor="airplane-mode">Allow other device to log in.</Label>
      <HoverCard>
        <HoverCardTrigger asChild>
          <AlertCircle width="20" height="20" strokeWidth="2" />
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <div className="space-y-1">
              <h4 className="text-1xl font-bold">Device Permission</h4>
              <p className="font-normal text-xs mt-3">
                By disabling you will only allow to sing in into your account
                from device which you created account.
              </p>
              <div className="flex items-center pt-2">
                <span className="text-xs text-muted-foreground">
                  Divice permission will be supported soon.
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default DevicePermission;
