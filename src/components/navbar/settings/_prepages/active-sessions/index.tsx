import type { FC } from "react";
import ThisDevice from "./this-device";
import OtherSessions from "./other-sessions";

const ActiveSessions: FC = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">Active Sessions</h1>
      <div>
        <ThisDevice />
        <OtherSessions />
      </div>
    </>
  );
};

export default ActiveSessions;
