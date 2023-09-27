import { FC } from "react";
import { Separator } from "@/components/ui/separator";
import { data, footer_data } from "@/utils/settings";
import PreTitle from "./customs/pre-title";
import Title from "./customs/title";

const Dashboard: FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div>
        {data.map(({ preTitle, isTitle, ...props }, idx) => (
          <div key={idx}>
            {preTitle && <PreTitle {...props} />}
            {isTitle && <Title {...props} />}
          </div>
        ))}
      </div>
      <div className="max-md:mt-[50px]">
        <Separator />
        {footer_data.map(({ isTitle, ...props }, idx) => (
          <div key={idx}>{isTitle && <Title {...props} />}</div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
