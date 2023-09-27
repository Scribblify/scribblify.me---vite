import type { FC } from "react";
import Avatar from "./customs/avatar";
import Main from "./customs/main";
import Views from "./customs/views";
import DeleteAccount from "../customs/delete-account";

const General: FC = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">General</h1>
      <div className="mt-5">
        <Avatar />
        <Main />
        <Views />
        <DeleteAccount />
      </div>
    </>
  );
};

export default General;
