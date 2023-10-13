import type { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { Separator } from "../../ui/separator";
import { IconRenderer } from "@/generic/icon-renderer";
import { X } from "lucide-react";
import Dashboard from "./dashboard";
import { data } from "@/utils/settings";
import { useReduxDispatch, useReduxSelector } from "@/hooks/useRedux";
import MobileDashboard from "./mobile-dashboard";
import { setProfileModalVisibility } from "@/redux/modalSlice";
import { useAuthUser } from "react-auth-kit";
import { UserType } from "@/@types";

const Setting: FC = () => {
  const auth = useAuthUser()() as UserType;
  const dispatch = useReduxDispatch();
  const { settingActive } = useReduxSelector((state) => state.selector);
  const { profileModal } = useReduxSelector((state) => state.modal);
  return (
    <Dialog
      open={profileModal}
      onOpenChange={() => dispatch(setProfileModalVisibility())}
    >
      <DialogContent className="max-w-[60%] max-lg:max-w-[100%] max-md:h-[100vh] h-[90vh] rounded-3xl flex flex-col">
        <DialogHeader>
          <DialogTitle>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 mb-3 max-md:hidden">
                <Avatar className="w-[45px] h-[45px]">
                  <AvatarImage src="https://github.com/scribblify.png" />
                  <AvatarFallback className="bg-[#CC6566] text-white font-semibold text-[18px] dark:bg-[#CC6566] dark:border-[#2B2B2C]">
                    A
                  </AvatarFallback>
                </Avatar>
                <span className="font-medium text-6">@{auth?.username}</span>
              </div>
              <MobileDashboard />
              <IconRenderer
                onClick={() => dispatch(setProfileModalVisibility())}
                className="hidden max-md:block"
              >
                <X width={24} height={24} />
              </IconRenderer>
            </div>
          </DialogTitle>
          <Separator />
        </DialogHeader>
        <div className="w-full h-full flex overflow-hidden">
          <div className="w-[33%] h-full max-md:hidden">
            <Dashboard />
          </div>
          <Separator orientation="vertical" className="max-md:hidden" />
          <div className="w-full h-full overflow-y-auto p-6">
            {data.map(
              ({ path, Component }, idx) =>
                path === settingActive && Component && <Component key={idx} />
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Setting;
