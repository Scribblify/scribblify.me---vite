import type { FC } from "react";
import DevicePermission from "./device-permission";
import DeleteAccount from "../../customs/delete-account";

const Privacy: FC = () => {
  return (
    <div className="mt-6">
      <h1 className="text-2xl font-bold">Privacy</h1>
      <DevicePermission />
      <DeleteAccount />
    </div>
  );
};

export default Privacy;
