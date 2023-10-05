import type { FC } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IconRenderer } from "@/generic/icon-renderer";
import { Separator } from "@/components/ui/separator";
import facebook from "/social-outlets/facebook.svg";
import linkedin from "/social-outlets/linkedin.svg";
import whatsapp from "/social-outlets/whatsapp.svg";
import vk from "/social-outlets/vk.svg";
import apple from "/social-outlets/apple.svg";
import google from "/social-outlets/google.svg";

const SignUp: FC = () => {
  return (
    <div>
      <form>
        <Input id="email" className="mt-3" placeholder="Email" max={40} />
        <Input
          id="password"
          type="password"
          className="mt-3"
          placeholder="Password"
          max={40}
        />
        <div className="relative">
          <p className="absolute dark:text-[#fff] text-sm top-[10px] left-3">
            scribblify.me/@
          </p>
          <Input
            id="username"
            className="mt-3 pl-[110px]"
            placeholder="username"
            max={40}
          />
        </div>
        <div className="flex justify-center mt-5">
          <Button type="submit">Create a blog</Button>
        </div>
      </form>
      <div className="relative w-full flex justify-center items-center text-center">
        <p className="bg-[#fff] dark:bg-[#222222] text-sm absolute p-2">
          Or create a blog with
        </p>
        <Separator className="my-6" />
      </div>
      <div className="flex gap-2 justify-center">
        <IconRenderer>
          <img src={google} alt={"google"} />
        </IconRenderer>
        <IconRenderer>
          <img src={facebook} alt={"facebook"} />
        </IconRenderer>
        <IconRenderer>
          <img src={apple} alt={"apple"} />
        </IconRenderer>
        <IconRenderer>
          <img src={linkedin} alt={"linkedin"} />
        </IconRenderer>
        <IconRenderer>
          <img src={whatsapp} alt={"whatsapp"} />
        </IconRenderer>
        <IconRenderer>
          <img src={vk} alt={"vk"} />
        </IconRenderer>
      </div>
    </div>
  );
};

export default SignUp;