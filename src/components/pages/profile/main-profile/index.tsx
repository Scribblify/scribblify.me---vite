import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { IconRendererWithText } from "@/generic/icon-renderer";
import type { FC } from "react";
import SocialMediaLinks from "./customs/social-media-links";
import { useAuthUser } from "react-auth-kit";
import { UserType } from "@/@types";

const MainProfile: FC = () => {
  const auth = useAuthUser()() as UserType;

  return (
    <div className="w-[30%] max-lg:w-[40%] bg-white dark:bg-[#222222] p-4 rounded-3xl max-md:w-full border dark:border-[#393939] transition-colors">
      <Avatar className="w-[104px] h-[104px] m-auto">
        <AvatarImage src="https://github.com/scribblify.png" />
        <AvatarFallback className="bg-[#CC6566] text-white font-semibold text-[32px] dark:bg-[#CC6566] dark:border-[#2B2B2C]">
          A
        </AvatarFallback>
      </Avatar>
      <h3 className="font-semibold text-2xl mt-[20px] text-center">
        @{auth?.username}
      </h3>
      <Button
        variant="outline"
        className="mt-[12px] w-full bg-transparent border-[#000000] dark:text-white dark:bg-transparent dark:border-1 dark:border-white"
      >
        New Post
      </Button>
      <div className="my-[12px] flex">
        <IconRendererWithText className="text-sm font-normal text-[#949494] dark:hover:text-white hover:text-black">
          <span className="font-bold text-black dark:text-white">0</span>{" "}
          Followers
        </IconRendererWithText>
        <IconRendererWithText className="text-sm font-normal text-[#949494] dark:hover:text-white hover:text-black">
          <span className="font-bold text-black dark:text-white">0</span>{" "}
          Following
        </IconRendererWithText>
        <IconRendererWithText className="text-sm font-normal text-[#949494] dark:hover:text-white hover:text-black">
          <span className="font-bold text-black dark:text-white">0</span> post
        </IconRendererWithText>
      </div>
      <SocialMediaLinks />
      <Separator className="my-[12px]" />
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-sm font-normal text-[#949494] hover:text-[#000000] dark:hover:text-[#fff] cursor-pointer transition-colors">
          <h3>Scheduled</h3>
          <p>0</p>
        </div>
        <div className="flex items-center justify-between text-sm font-normal text-[#949494] hover:text-[#000000] dark:hover:text-[#fff] cursor-pointer transition-colors">
          <h3>Hidden</h3>
          <p>0</p>
        </div>
        <div className="flex items-center justify-between text-sm font-normal text-[#949494] hover:text-[#000000] dark:hover:text-[#fff] cursor-pointer transition-colors">
          <h3>Drafts</h3>
          <p>0</p>
        </div>
      </div>
      <Separator className="my-[12px]" />
    </div>
  );
};

export default MainProfile;
