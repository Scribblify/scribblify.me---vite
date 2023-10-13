import { FC, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IconRenderer } from "@/generic/icon-renderer";
import { Separator } from "@/components/ui/separator";
import facebook from "/social-outlets/facebook.svg";
import linkedin from "/social-outlets/linkedin.svg";
import whatsapp from "/social-outlets/whatsapp.svg";
import vk from "/social-outlets/vk.svg";
import apple from "/social-outlets/apple.svg";
import google from "/social-outlets/google.svg";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { useAxios } from "@/hooks/useAxios";
import { AuthResponse } from "@/@types";

const SignUp: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const signIn = useSignIn();
  const navigate = useNavigate();
  const { toast } = useToast();
  const axios = useAxios();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);

  const onSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    axios({
      url: "/user/sign-up",
      method: "POST",
      body: {
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
        username: usernameRef.current?.value,
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
        return toast({
          title: error.response.statusText,
          description: error.response.data.extraMessage,
          variant: "destructive",
        });
      });
  };
  return (
    <div>
      <form onSubmit={onSignUp}>
        <Input
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
          <p className="absolute dark:text-[#fff] text-sm top-[10px] left-3">
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

export default SignUp;
