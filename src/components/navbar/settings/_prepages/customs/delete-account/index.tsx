import { Button } from "@/components/ui/button";
import type { FC } from "react";

const DeleteAccount: FC = () => {
  return (
    <div className="mt-6">
      <h3 className="text-1xl text-red-500">Danger Zone</h3>
      <Button
        variant={"outline"}
        className="rounded-full mt-3 border-red-500 text-red-500 hover:bg-[#fce3e3] hover:text-red dark:bg-red-500 dark:text-white dark:hover:bg-red-500"
      >
        Yes, delete this blog
      </Button>
      <p className="text-xs font-normal my-3">
        This will delete the <span className="font-bold">‘@abduvoitov’</span>{" "}
        blog, all its posts and all access rights linked to it. This process is
        irreversible! Please think twice before killing your content.
      </p>
    </div>
  );
};

export default DeleteAccount;
