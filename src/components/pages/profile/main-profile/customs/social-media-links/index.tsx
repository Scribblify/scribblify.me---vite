import type { FC } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IconRenderer } from "@/generic/icon-renderer";
import telegram from "/social-outlets/telegram.svg";
import instagram from "/social-outlets/instagram.svg";
import facebook from "/social-outlets/facebook.svg";
import twitter from "/social-outlets/twitter.svg";
import youtube from "/social-outlets/youtube.svg";
import linkedin from "/social-outlets/linkedin.svg";
import pinterest from "/social-outlets/pinterest.svg";
import reddit from "/social-outlets/reddit.svg";
import tiktok from "/social-outlets/tiktok.svg";
import whatsapp from "/social-outlets/whatsapp.svg";
import discord from "/social-outlets/discord.svg";
import snapchat from "/social-outlets/snapchat.svg";
import github from "/social-outlets/github.svg";
import medium from "/social-outlets/medium.svg";
import vk from "/social-outlets/vk.svg";
import stackoverflow from "/social-outlets/stackoverflow.svg";
import behance from "/social-outlets/behance.svg";
import wechat from "/social-outlets/wechat.svg";
import flickr from "/social-outlets/flickr.svg";
import facebookmessanger from "/social-outlets/facebookmessanger.svg";

const SocialMediaLinks: FC = () => {
  return (
    <div className="flex gap-1 flex-wrap">
      {/* Telegram */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <IconRenderer>
              <img src={telegram} alt={"telegram"} />
            </IconRenderer>
          </TooltipTrigger>
          <TooltipContent>
            <p>Telegram</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {/* Instagram */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <IconRenderer>
              <img src={instagram} alt={"instagram"} />
            </IconRenderer>
          </TooltipTrigger>
          <TooltipContent>
            <p>Instagram</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {/* Facebook */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <IconRenderer>
              <img src={facebook} alt={"facebook"} />
            </IconRenderer>
          </TooltipTrigger>
          <TooltipContent>
            <p>Facebook</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {/* Youtube */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <IconRenderer>
              <img src={youtube} alt={"youtube"} />
            </IconRenderer>
          </TooltipTrigger>
          <TooltipContent>
            <p>Youtube</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {/* Twitter */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <IconRenderer>
              <img src={twitter} alt={"twitter"} />
            </IconRenderer>
          </TooltipTrigger>
          <TooltipContent>
            <p>Twitter</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {/* LinkedIn */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <IconRenderer>
              <img src={linkedin} alt={"linkedin"} />
            </IconRenderer>
          </TooltipTrigger>
          <TooltipContent>
            <p>LinkedIn</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {/* Pinterest */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <IconRenderer>
              <img src={pinterest} alt={"pinterest"} />
            </IconRenderer>
          </TooltipTrigger>
          <TooltipContent>
            <p>Pinterest</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {/* Reddit */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <IconRenderer>
              <img src={reddit} alt={"reddit"} />
            </IconRenderer>
          </TooltipTrigger>
          <TooltipContent>
            <p>Reddit</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {/* Tiktok */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <IconRenderer>
              <img src={tiktok} alt={"tiktok"} />
            </IconRenderer>
          </TooltipTrigger>
          <TooltipContent>
            <p>TikTok</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {/* WhatsApp */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <IconRenderer>
              <img src={whatsapp} alt={"whatsapp"} />
            </IconRenderer>
          </TooltipTrigger>
          <TooltipContent>
            <p>WhatsApp</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {/* Discord */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <IconRenderer>
              <img src={discord} alt={"discord"} />
            </IconRenderer>
          </TooltipTrigger>
          <TooltipContent>
            <p>Discord</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {/* SnapChat */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <IconRenderer>
              <img src={snapchat} alt={"snapchat"} />
            </IconRenderer>
          </TooltipTrigger>
          <TooltipContent>
            <p>Snapchat</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {/* Github */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <IconRenderer>
              <img src={github} alt={"github"} />
            </IconRenderer>
          </TooltipTrigger>
          <TooltipContent>
            <p>Github</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {/* Medium */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <IconRenderer>
              <img src={medium} alt={"medium"} />
            </IconRenderer>
          </TooltipTrigger>
          <TooltipContent>
            <p>Medium</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {/* VK */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <IconRenderer>
              <img src={vk} alt={"vk"} />
            </IconRenderer>
          </TooltipTrigger>
          <TooltipContent>
            <p>VK</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {/* Stack Overflow */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <IconRenderer>
              <img src={stackoverflow} alt={"stackoverflow"} />
            </IconRenderer>
          </TooltipTrigger>
          <TooltipContent>
            <p>Stack Overflow</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {/* Behance */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <IconRenderer>
              <img src={behance} alt={"behance"} />
            </IconRenderer>
          </TooltipTrigger>
          <TooltipContent>
            <p>Behance</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {/* WeChat */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <IconRenderer>
              <img src={wechat} alt={"wechat"} />
            </IconRenderer>
          </TooltipTrigger>
          <TooltipContent>
            <p>WeChat</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {/* Flickr */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <IconRenderer>
              <img src={flickr} alt={"flickr"} />
            </IconRenderer>
          </TooltipTrigger>
          <TooltipContent>
            <p>Flickr</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {/* Facebook Messanger */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <IconRenderer>
              <img src={facebookmessanger} alt={"facebookmessanger"} />
            </IconRenderer>
          </TooltipTrigger>
          <TooltipContent>
            <p>Facebook Messager</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default SocialMediaLinks;
