import type { FC } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { IconRenderer } from "@/generic/icon-renderer";
import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "/logo.png";
import ProfileMenu from "./profile-menu";
import LogOut from "./profile-menu/logout-dialog";
import Setting from "./settings";
import { useAuth } from "@/tools/auth";
import { Button } from "../ui/button";

const Navbar: FC = () => {
  const navigate = useNavigate();
  const { isAuthed } = useAuth();

  return (
    <>
      <div className="h-[51px] sticky top-0 flex items-center px-5 bg-[#FCFCFC] dark:bg-[#222222] justify-between">
        <LogOut />
        <Setting />
        <div className="flex items-center gap-2 cursor-pointer ">
          <Link className="cursor-pointer" to={"/"}>
            <img
              src={logo}
              alt="scribblify_logo"
              className="w-[40px] h-[40px]"
              loading="eager"
            />
          </Link>
        </div>
        {isAuthed ? (
          <div className="flex items-start gap-3">
            {/* New Post */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <IconRenderer>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-plus-circle"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 12h8" />
                      <path d="M12 8v8" />
                    </svg>
                  </IconRenderer>
                </TooltipTrigger>
                <TooltipContent>
                  <p>New post</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <div className="border-[1px] dark:border-[#2B2B2C] border-[#EFEFEF] h-[32px] "></div>

            {/* Stack */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <IconRenderer>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-layers"
                    >
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                  </IconRenderer>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Stack</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* Notification */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <IconRenderer>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-bell"
                    >
                      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                    </svg>
                  </IconRenderer>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Notifications</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* Profile */}
            <ProfileMenu />
          </div>
        ) : (
          <Button onClick={() => navigate("/auth?path=sign-in")}>Join</Button>
        )}
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
