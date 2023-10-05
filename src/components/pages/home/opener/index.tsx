import { Button } from "@/components/ui/button";
import FeatureCard from "./feature-card";
import { useNavigate } from "react-router-dom";

const Animation = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center  mt-9 max-w-[1200px] m-auto gap-8 px-5">
      <div>
        <div className="text-[5.6rem] font-bold max-lg:text-[4rem] max-md:text-[2rem]">
          <span>
            Write your story now on{" "}
            <span className="bg-gradient-to-r from-[#1B9DF5] via-[#1B9DF5] to-[#2A63E7] inline-block text-transparent bg-clip-text">
              Scribblify
            </span>{" "}
            powered by{" "}
            <span className="bg-gradient-to-r from-[#1B9DF5] via-[#1B9DF5] to-[#2A63E7] inline-block text-transparent bg-clip-text">
              AI.
            </span>
          </span>
        </div>
        <div className="text-[1.5rem] max-lg:text-[1rem] mt-6 font-normal m-auto max-w-[1000px] text-center ">
          Scribblify - is an online publishing platform that allows writers to
          share their stories and perspectives with a global audience.
        </div>
        <Button
          onClick={() => navigate("/auth")}
          className="mt-9 p-6 bg-gradient-to-r from-[#1B9DF5] via-[#1B9DF5] to-[#2A63E7]  bg-clip text-white text-[1rem]"
        >
          Join to Scribblify
        </Button>
      </div>
      <div className="mt-[100px] max-w-[700px] m-auto flex flex-col gap-[80px]">
        <FeatureCard
          title="Earn for views"
          description="Earn money for views, from ads and easily transfer earnings to your bank"
          icon="earn-money"
        />
        <FeatureCard
          title="Tips"
          description="Receive tips from your fans and easily transfer earnings to your bank"
          icon="tips"
        />
        <FeatureCard
          title="No coding"
          description="Create beautiful media rich posts without a single line of code"
          icon="no-coding"
        />
        <FeatureCard
          title="No taxes"
          description="Beyond a service fee, no personal income tax payment required"
          icon="no-taxes"
        />
        <FeatureCard
          title="Analytics"
          description="Add Google or Yandex analytics to your page to learn all you can about your audience"
          icon="analytics"
        />
        <FeatureCard
          title="Great community"
          description="Follow our blog to stay up to date with Teletype's news and features"
          icon="community"
        />
        <div className="my-12">
          <Button
            onClick={() => navigate("/auth")}
            className="p-6 m-auto bg-gradient-to-r from-[#1B9DF5] via-[#1B9DF5] to-[#2A63E7]  bg-clip text-white text-[1rem]"
          >
            Join to Scribblify
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Animation;
