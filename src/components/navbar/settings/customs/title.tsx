import { SettingItemType } from "@/@types";
import { useReduxDispatch, useReduxSelector } from "@/hooks/useRedux";
import { setSettingActive } from "@/redux/selectorSlice";

import { FC } from "react";

const Title: FC<SettingItemType> = ({ title, icon, size, path }) => {
  const dispatch = useReduxDispatch();
  const { settingActive } = useReduxSelector((state) => state.selector);

  return (
    <div
      onClick={() => dispatch(setSettingActive(path ?? "/wallet"))}
      className={`flex gap-2 pl-[12px] p-[12px] rounded-s-md items-center  dark:hover:bg-[#323232] hover:bg-[#e8e8e8] cursor-pointer group transition-colors ${
        size === "small"
          ? "text-[12px] text-[#949494] mt-[0px] "
          : "text-[14px] mt-[8px]"
      } ${settingActive === path && "dark:bg-[#323232] bg-[#e8e8e8]"} `}
    >
      {icon &&
        icon({
          className: `${
            size === "small"
              ? `${
                  settingActive === path
                    ? "text-[#000000] dark:text-white"
                    : "text-[#949494]"
                }`
              : "dark:text-white text-[#000000]"
          } group-hover:dark:text-white group-hover:text-[#000000]`,
        })}
      <h3
        className={` group-hover:dark:text-white group-hover:text-[#000000] ${
          settingActive === path && "text-[#000000] dark:text-white"
        } font-normal`}
      >
        {title}
      </h3>
    </div>
  );
};

export default Title;
