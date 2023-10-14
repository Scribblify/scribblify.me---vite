import { FC } from "react";
import SignUp from "./sign-up";
import SignIn from "./sign-in";
import { useSearchParams } from "react-router-dom";

type PathType = "sign-in" | "sign-up";

const Auth: FC = () => {
  const [params, setParams] = useSearchParams();

  const unactive_style: string = "text-[#BABABA] dark:text-[#5F5F5F]";

  const redirect = ({ path }: { path: PathType }) => setParams({ path });
  const active = (params.get("path") ?? "sign-in") as PathType;

  return (
    <div className="w-full h-full flex items-center justify-center px-5">
      <div className="bg-[#fff] dark:bg-[#222222] w-[420px] p-5 mt-[25vh] rounded-md">
        <div className="flex justify-center gap-6">
          <h3
            className={`cursor-pointer text-1xl font-bold transition-colors ${
              active !== "sign-in" && unactive_style
            }`}
            onClick={() => redirect({ path: "sign-in" })}
          >
            Sign In
          </h3>
          <h3
            className={`cursor-pointer text-1xl font-bold transition-colors ${
              active === "sign-in" && unactive_style
            }`}
            onClick={() => redirect({ path: "sign-up" })}
          >
            Sign Up
          </h3>
        </div>
        <div className="p-3">
          {active === "sign-in" ? <SignIn /> : <SignUp />}
        </div>
        <p className="text-center text-sm text-[#949494] dark:text-[#696969]">
          By clicking Create a blog, I agree that I have read and accepted the
          Terms of Service
        </p>
      </div>
    </div>
  );
};

export default Auth;
