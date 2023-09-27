import type { FC } from "react";
import Theme from "./theme";
import Locale from "./locale";

const Appearance: FC = () => {
  return (
    <div className="mt-6">
      <h1 className="text-2xl font-bold">Appearance</h1>
      <div className="flex flex-col mt-4 gap-2">
        <Theme />
        <Locale />
      </div>
    </div>
  );
};

export default Appearance;
