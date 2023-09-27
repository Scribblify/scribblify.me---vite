import type { FC } from "react";
import Gmail from "./providers/gmail";
import Facebook from "./providers/facebook";
import Google from "./providers/google";
import Apple from "./providers/apple";
import Twitter from "./providers/twitter";
import Twitch from "./providers/twitch";

const AuthProviders: FC = () => {
  return (
    <div className="mt-3">
      <h1 className="text-2xl font-bold">Accounts</h1>
      <p className="mt-3 font-normal text-sm">
        You can use any of these account for login.
      </p>
      <div className="flex flex-col mt-4 gap-2">
        <Gmail />
        <Facebook />
        <Google />
        <Apple />
        <Twitter />
        <Twitch />
      </div>
    </div>
  );
};

export default AuthProviders;
