import { FC, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "../customs/request";
import { Helmet } from "react-helmet-async";
import EmailVerification from "../customs/email-verification";
import { useReduxDispatch } from "@/hooks/useRedux";
import { setEmailVerificationDialog } from "@/redux/modalSlice";
import axios from "axios";
import { IIP_ADDRESS } from "@/@types";
import { IconRenderer } from "@/generic/icon-renderer";
import { Eye, EyeOff } from "lucide-react";
import UsernameInput from "@/generic/input";

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
  const dispatch = useReduxDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [showPw, setShowPw] = useState<boolean>();
  const auth = useAuth();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);

  const onSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const { data }: { data: IIP_ADDRESS } = await axios({
      url: "https://ipapi.co/json",
    });

    await auth({
      url: "/user/sign-up",
      body: {
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
        username: usernameRef.current?.value,
        ip_address: data,
      },
      callbackFunc: ({ error }) =>
        !error && dispatch(setEmailVerificationDialog()),
      cancelNavigatingInSuccess: true,
    });

    setLoading(false);
  };

  return (
    <div>
      <SignUpHelmet />
      <EmailVerification />
      <form onSubmit={onSignUp}>
        <Input
          type="email"
          required
          ref={emailRef}
          className="mt-3"
          placeholder="Email"
          max={40}
        />
        <div className="relative">
          <Input
            ref={passwordRef}
            required
            type={showPw ? "text" : "password"}
            className="mt-3"
            placeholder="Password"
            max={40}
          />
          <IconRenderer
            className="absolute right-2 bottom-1"
            onClick={() => setShowPw(!showPw)}
          >
            {showPw ? <EyeOff /> : <Eye />}
          </IconRenderer>
        </div>
        <UsernameInput
          focus={() => usernameRef?.current?.focus()}
          ref={usernameRef}
        />

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
    </div>
  );
};

export default SignUp;
