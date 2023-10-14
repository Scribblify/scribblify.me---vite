import { FC, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IconRenderer } from "@/generic/icon-renderer";
import { Separator } from "@/components/ui/separator";
import facebook from "/social-outlets/facebook.svg";
import twitter from "/social-outlets/twitter.svg";
import google from "/social-outlets/google.svg";
import { useAuth } from "../customs/request";
import { Helmet } from "react-helmet-async";

const SignUpHelmet: FC = () => {
  return (
    <Helmet>
      <title>Scribblify - Sign Up</title>
      <meta
        name="description"
        content="Scribblify - is an online publishing platform that allows writers to share their stories and perspectives with a global audience."
      />
      <link rel="canonical" href="/auth?path=sign-up" />
    </Helmet>
  );
};

const SignUp: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const auth = useAuth();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);

  const onSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    await auth({
      url: "/user/sign-up",
      body: {
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
        username: usernameRef.current?.value,
      },
    });

    setLoading(false);
  };

  return (
    <div>
      <SignUpHelmet />
      <form onSubmit={onSignUp}>
        <Input
          type="email"
          required
          ref={emailRef}
          className="mt-3"
          placeholder="Email"
          max={40}
        />
        <Input
          ref={passwordRef}
          required
          type="password"
          className="mt-3"
          placeholder="Password"
          max={40}
        />
        <div className="relative">
          <p
            onClick={() => usernameRef.current?.focus()}
            className="absolute dark:text-[#fff] text-sm top-[10px] left-3 select-none"
          >
            scribblify.me/@
          </p>
          <Input
            required
            ref={usernameRef}
            className="mt-3 pl-[110px]"
            placeholder="username"
            max={40}
          />
        </div>
        <div className="flex justify-center mt-5">
          <Button type="submit">
            {loading ? (
              <span
                className="m-3 inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              ></span>
            ) : (
              "Create a blog"
            )}
          </Button>
        </div>
      </form>
      <div className="relative w-full flex justify-center items-center text-center">
        <p className="bg-[#fff] dark:bg-[#222222] text-sm absolute p-2">
          Or create a blog with
        </p>
        <Separator className="my-6" />
      </div>
      <div className="flex gap-2 justify-center">
        <IconRenderer>
          <img src={google} alt={"google"} />
        </IconRenderer>
        <IconRenderer>
          <img src={facebook} alt={"facebook"} />
        </IconRenderer>
        <IconRenderer>
          <img src={twitter} alt={"twitter"} />
        </IconRenderer>
      </div>
    </div>
  );
};

export default SignUp;
