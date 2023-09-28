import { Separator } from "@/components/ui/separator";
import { IconRenderer } from "@/generic/icon-renderer";
import type { FC } from "react";
import { Link } from "react-router-dom";
import telegram from "/social-outlets/telegram.svg";
import linkedin from "/social-outlets/linkedin.svg";
import facebook from "/social-outlets/facebook.svg";

const Footer: FC = () => {
  return (
    <div className="mt-9 w-full ">
      <Separator className="bg-[#EFEFEF]" />
      <div className="flex m-auto mt-6 gap-[90px] justify-center max-sm:px-[20px] max-sm:flex-col max-sm:items-center max-sm:text-center max-sm:gap-6">
        <div>
          <h3 className="text-sm text-[#949494] font-normal">
            Support and feedback
          </h3>
          <div className="flex flex-col gap-3 mt-3 text-1xl">
            <Link to="/">Twitter</Link>
            <Link to="/">Telegram</Link>
            <Link to="/">Message us</Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm text-[#949494] font-normal">Legal</h3>
          <div className="flex flex-col gap-3 mt-3 text-1xl">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms and Conditions</Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm text-[#949494] font-normal">Social</h3>
          <div className="flex gap-3 mt-3 text-1xl">
            <IconRenderer>
              <img src={telegram} alt="telegram" />
            </IconRenderer>
            <IconRenderer>
              <img src={linkedin} alt={"linkedin"} />
            </IconRenderer>
            <IconRenderer>
              <img src={facebook} alt={"facebook"} />
            </IconRenderer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
