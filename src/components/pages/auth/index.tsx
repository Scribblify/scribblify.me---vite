import { FC, useState } from "react";
import SignUp from "./sign-up";
import SignIn from "./sign-in";

const Auth: FC = () => {
  const [active, setActive] = useState<"sign-in" | "sign-up">("sign-in");

  const unactive_style: string = "text-[#BABABA] dark:text-[#5F5F5F]";

  return (
    <div className="w-full h-full flex items-center justify-center px-5">
      <div className="bg-[#fff] dark:bg-[#222222] w-[420px] p-5 mt-[25vh] rounded-md">
        <div className="flex justify-center gap-6">
          <h3
            className={`cursor-pointer text-1xl font-bold transition-colors ${
              active !== "sign-in" && unactive_style
            }`}
            onClick={() => setActive("sign-in")}
          >
            Sign In
          </h3>
          <h3
            className={`cursor-pointer text-1xl font-bold transition-colors ${
              active !== "sign-up" && unactive_style
            }`}
            onClick={() => setActive("sign-up")}
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
