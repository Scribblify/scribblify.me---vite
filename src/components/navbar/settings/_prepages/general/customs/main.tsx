import type { FC } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Main: FC = () => {
  return (
    <div className="mt-6 flex flex-col gap-3">
      <div>
        <Label htmlFor="username">Username</Label>
        <Input id="username" className="mt-3" placeholder="Username" max={40} />
      </div>
      <div>
        <Label htmlFor="display-name">Display Name</Label>
        <Input id="display-name" className="mt-3" placeholder="Your Name" />
      </div>
      <div>
        <Label htmlFor="about">About</Label>
        <Textarea
          className="mt-3"
          id="about"
          placeholder="Something about you"
        />
      </div>
    </div>
  );
};

export default Main;
