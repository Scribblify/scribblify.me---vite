import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import type { FC } from "react";

const Views: FC = () => {
  return (
    <div className="mt-6">
      <h3 className="text-1xl font-medium">Views</h3>
      <div className="mt-6 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Switch defaultChecked id="comments-checkbox" />
          <Label className="text-xs" htmlFor="comments-checkbox">
            Allow comments
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Switch defaultChecked id="reactions-checkbox" />
          <Label className="text-xs" htmlFor="reactions-checkbox">
            Allow reactions
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Switch defaultChecked id="authorname-checkbox" />
          <Label className="text-xs" htmlFor="authorname-checkbox">
            Display author name
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Switch defaultChecked id="authorname-checkbox" />
          <Label className="text-xs" htmlFor="authorname-checkbox">
            Display categories on main page
          </Label>
        </div>
      </div>
    </div>
  );
};

export default Views;
