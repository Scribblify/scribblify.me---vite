import { FC } from "react";

type PreTitleProps = {
  title: string;
};

const PreTitle: FC<PreTitleProps> = ({ title }) => {
  return (
    <div className="text-[#000000] text-[12px] mt-[12px] dark:text-[#949494]">
      {title}
    </div>
  );
};

export default PreTitle;
