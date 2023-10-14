import { FC, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import facebook from "/social-outlets/facebook.svg";
import twitter from "/social-outlets/twitter.svg";
import google from "/social-outlets/google.svg";
import { IconRenderer } from "@/generic/icon-renderer";
import { Button } from "@/components/ui/button";
import {
  signInWithFacebook,
  signInWithGoogle,
  signInWithTwitter,
} from "@/config";
import AuthProcess from "../customs/auth-process";
import { useReduxDispatch } from "@/hooks/useRedux";
import { setAuthProcessDialog } from "@/redux/modalSlice";
import { useAuth } from "../customs/request";
import { Helmet } from "react-helmet-async";

const SignInHelmet: FC = () => {
  return (
    <Helmet>
      <title>Scribblify - Sign In</title>
      <meta
        name="description"
        content="Scribblify - is an online publishing platform that allows writers to share their stories and perspectives with a global audience."
      />
      <link rel="canonical" href="/auth?path=sign-in" />
    </Helmet>
  );
};

const SignIn: FC = () => {
  const dispatch = useReduxDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const auth = useAuth();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    await auth({
      url: "/user/sign-in",
      body: {
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      },
    });

    setLoading(false);
  };

  const signWithGoogle = async () => {
    const data = await signInWithGoogle();

    dispatch(setAuthProcessDialog()); // Dialog -> true

    await auth({
      url: "/user/sign-in/google",
      body: {
        email: data.user.email,
      },
    });

    dispatch(setAuthProcessDialog()); // Dialog -> false
  };

  const signWithFacebook = async () => {
    const data = await signInWithFacebook();

    console.log(data);
  };

  const singWithTwitter = async () => {
    const data = await signInWithTwitter();

    dispatch(setAuthProcessDialog()); // Dialog -> true

    await auth({
      url: "/user/sign-in/twitter",
      body: {
        uid: data.user.uid,
      },
    });

    dispatch(setAuthProcessDialog()); // Dialog -> false
  };

  return (
    <div>
      <SignInHelmet />
      <AuthProcess />
      <form onSubmit={onSignIn}>
        <Input
          required
          className="mt-3"
          type="email"
          placeholder="Email"
          max={40}
          ref={emailRef}
        />
        <Input
          type="password"
          className="mt-3"
          placeholder="Password"
          max={40}
          required
          ref={passwordRef}
        />
        <div className="flex justify-center mt-5">
          <Button type="submit">
            {loading ? (
              <span
                className="m-3 inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              ></span>
            ) : (
              "Sign In"
            )}
          </Button>
        </div>
      </form>
      <div className="relative w-full flex justify-center items-center text-center">
        <p className="bg-[#fff] dark:bg-[#222222] text-sm absolute p-2">
          Or sign in with
        </p>
        <Separator className="my-6" />
      </div>
      <div className="flex gap-2 justify-center">
        <IconRenderer onClick={signWithGoogle}>
          <img src={google} alt={"google"} />
        </IconRenderer>
        <IconRenderer onClick={signWithFacebook}>
          <img src={facebook} alt={"facebook"} />
        </IconRenderer>
        <IconRenderer onClick={singWithTwitter}>
          <img src={twitter} alt={"twitter"} />
        </IconRenderer>
      </div>
    </div>
  );
};

export default SignIn;
