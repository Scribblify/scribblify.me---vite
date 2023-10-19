import type { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { useNavigate } from "react-router-dom";
import { LogOut, Settings } from "lucide-react";
import { useReduxDispatch } from "@/hooks/useRedux";
import {
  setLogOutDialogVisibility,
  setProfileModalVisibility,
} from "@/redux/modalSlice";
import { useAuthUser } from "react-auth-kit";
import { UserType } from "@/@types";

const ProfileMenu: FC = () => {
  const auth = useAuthUser()() as UserType;
  const dispatch = useReduxDispatch();
  const navigate = useNavigate();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center p-2 gap-2 h-[32px] cursor-pointer dark:hover:bg-[#323232] hover:bg-[#e8e8e8] transition-colors rounded-md">
          <Avatar className="w-[24px] h-[24px]">
            <AvatarImage src="https://github.com/scribblify.png" />
            <AvatarFallback
              style={{
                background: `#${auth?.profile?.fallback}`,
              }}
              className={`bg-[#${auth?.profile?.fallback}] text-white font-semibold text-[12px] dark:bg-[#${auth?.profile?.fallback}] dark:border-[#2B2B2C]`}
            >
              {String(auth?.username?.[0]).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <span className="font-medium text-[14px]">@{auth?.username}</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 dark:bg-[#222222] dark:border-[#2B2B2C]">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator className="dark:bg-[#222222]" />
        <DropdownMenuGroup>
          {/* Profile */}
          <DropdownMenuItem
            onClick={() => navigate(`/@${auth.username}`)}
            className="cursor-pointer"
          >
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          {/* Settings */}
          <DropdownMenuItem
            onClick={() => dispatch(setProfileModalVisibility())}
            className="cursor-pointer"
          >
            Setting
            <DropdownMenuShortcut>
              <Settings width={"18"} height={"18"} />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
          {/* Sign out */}
          <DropdownMenuItem
            onClick={() => dispatch(setLogOutDialogVisibility())}
            className="cursor-pointer text-red-600"
          >
            Sign out
            <DropdownMenuShortcut>
              <LogOut width={"18"} height={"18"} />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileMenu;
