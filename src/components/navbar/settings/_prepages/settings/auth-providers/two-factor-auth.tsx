import { Button } from "@/components/ui/button";
import type { FC } from "react";

const TwoFactorAuth: FC = () => {
  return (
    <div className="border-[#E2E8F0] dark:border-[#393939] border p-3 rounded-md">
      <h1 className="text-2xl font-bold">Two-factor authentication</h1>
      <p className="mt-3 font-normal text-sm">
        An extra layer of security designed to ensure that {"you're"} the only
        person who can access your account, even if someone else knows your
        password.
      </p>
      <div className="flex mt-6">
        <Button>Turn on</Button>
      </div>
    </div>
  );
};

export default TwoFactorAuth;
