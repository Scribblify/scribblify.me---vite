import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Chrome } from "lucide-react";
import type { FC } from "react";

const OtherSessions: FC = () => {
  return (
    <div className="mt-4">
      <p className="text-xs">Actice Sessions</p>

      <div className="my-2 border-[#E2E8F0] dark:border-[#393939] border p-3 rounded-md cursor-pointer">
        <div className="flex gap-4 mb-3">
          <div>
            <Chrome />
          </div>
          <div>
            <h3>Iphone 12 Pro Max</h3>

            <p className="text-xs mt-4">
              Scribblify chrome 10.2.1 (254873) APP_STORE, macOS 13.6
            </p>
            <p className="text-xs text-[#89898a] mt-2">
              213.230.78.82 Tashkent, Uzbekistan
            </p>
          </div>
        </div>
        <Separator />
        <Button className="text-red-500 mt-2" variant={"link"}>
          Terminate session
        </Button>
      </div>
    </div>
  );
};

export default OtherSessions;
