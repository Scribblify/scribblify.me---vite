import type { FC } from "react";
import AuthProviders from "./auth-providers";
import TwoFactorAuth from "./auth-providers/two-factor-auth";
import Appearance from "./appearance";
import Privacy from "./privacy";

const Settings: FC = () => {
  return (
    <>
      <TwoFactorAuth />
      <AuthProviders />
      <Appearance />
      <Privacy />
    </>
  );
};

export default Settings;
