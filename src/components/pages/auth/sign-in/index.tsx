import { FC, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import facebook from "/social-outlets/facebook.svg";
import linkedin from "/social-outlets/linkedin.svg";
import whatsapp from "/social-outlets/whatsapp.svg";
import vk from "/social-outlets/vk.svg";
import apple from "/social-outlets/apple.svg";
import google from "/social-outlets/google.svg";
import { IconRenderer } from "@/generic/icon-renderer";
import { Button } from "@/components/ui/button";
import { useAxios } from "@/hooks/useAxios";
import { useToast } from "@/components/ui/use-toast";
import { AuthResponse } from "@/@types";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

const SignIn: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const signIn = useSignIn();
  const navigate = useNavigate();
  const { toast } = useToast();
  const axios = useAxios();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const onSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    axios({
      url: "/user/sign-in",
      method: "POST",
      body: {
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      },
    })
      .then((res) => {
        const { data }: { data: AuthResponse } = res;
        signIn({
          token: data.data.token,
          expiresIn: 7200,
          tokenType: "Bearer",
          authState: data.data.user,
        });
        navigate("/");
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);

        return toast({
          title: error.response.statusText,
          description: error.response.data.extraMessage,
          variant: "destructive",
        });
      });
  };

  return (
    <div>
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
        <IconRenderer>
          <img src={google} alt={"google"} />
        </IconRenderer>
        <IconRenderer>
          <img src={facebook} alt={"facebook"} />
        </IconRenderer>
        <IconRenderer>
          <img src={apple} alt={"apple"} />
        </IconRenderer>
        <IconRenderer>
          <img src={linkedin} alt={"linkedin"} />
        </IconRenderer>
        <IconRenderer>
          <img src={whatsapp} alt={"whatsapp"} />
        </IconRenderer>
        <IconRenderer>
          <img src={vk} alt={"vk"} />
        </IconRenderer>
      </div>
    </div>
  );
};

export default SignIn;
