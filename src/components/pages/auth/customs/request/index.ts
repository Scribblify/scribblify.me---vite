import { AuthResponse } from "@/@types";
import { useToast } from "@/components/ui/use-toast";
import { useAxios } from "@/hooks/useAxios";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const { toast } = useToast();
  const axios = useAxios();
  const signIn = useSignIn();
  const navigate = useNavigate();

  return async ({ body, url }: { body: object; url: string }) =>
    axios({
      url,
      method: "POST",
      body: body,
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
      })
      .catch((error) => {
        return toast({
          title: error.response.statusText,
          description: error.response.data.extraMessage,
          variant: "destructive",
        });
      });
};
