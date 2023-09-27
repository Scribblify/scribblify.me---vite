import type { FC } from "react";
import { Button } from "@/components/ui/button";

const Wallet: FC = () => {
  return (
    <>
      <h1 className="text-4xl font-bold">Monetize your content</h1>
      <p className="mt-[12px] font-normal text-base">
        Add a bank card to your profile to allow your readers to send you tips,
        and by adding your bank card you will be able to earn money by views
      </p>
      <div className="flex mt-[22px]">
        <Button>Activate</Button>
        <Button variant="link">Learn more</Button>
      </div>
    </>
  );
};

export default Wallet;
