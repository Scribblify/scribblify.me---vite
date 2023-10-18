import type { FC } from "react";
import {
  ChevronRightSquare,
  CircleDollarSign,
  Coins,
  Landmark,
  LineChart,
  Users,
} from "lucide-react";

type FeatureCardType = {
  icon:
    | "tips"
    | "no-coding"
    | "earn-money"
    | "no-taxes"
    | "analytics"
    | "community";
  title: string;
  description: string;
  hasNavigation?: boolean;
  navigation_uri?: string;
};

const FeatureCard: FC<FeatureCardType> = ({ icon, title, description }) => {
  const iconRenderer = () => {
    const mainprops = { strokeWidth: 2, width: 30, height: 30 };
    switch (icon) {
      case "earn-money":
        return <CircleDollarSign />;
      case "tips":
        return <Coins {...mainprops} />;
      case "no-coding":
        return <ChevronRightSquare {...mainprops} />;
      case "no-taxes":
        return <Landmark {...mainprops} />;
      case "analytics":
        return <LineChart {...mainprops} />;
      case "community":
        return <Users {...mainprops} />;
    }
  };
  return (
    <div className="flex gap-5 w-full items-center">
      <div className="min-w-[65px] h-[65px] flex items-center justify-center bg-[#1B9DF5] rounded-full text-white">
        {iconRenderer()}
      </div>
      <div className="text-left">
        <h3 className="text-3xl font-bold max-md:text-2xl">{title}</h3>
        <p className="text-1xl mt-2 font-normal text-[#949494] max-md:text-xl max-sm:text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
