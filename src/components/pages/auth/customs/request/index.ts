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

  return async ({
    body,
    url,
    callbackFunc,
    cancelNavigatingInSuccess,
  }: {
    body: object;
    url: string;
    cancelNavigatingInSuccess?: boolean;
    callbackFunc?: (_: {
      success?: { data: AuthResponse };
      error?: { response?: { data?: { code?: string } } };
    }) => void;
  }) =>
    axios({
      url,
      method: "POST",
      body: body,
    })
      .then((res) => {
        if (callbackFunc) callbackFunc({ success: res });
        if (cancelNavigatingInSuccess) return;

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
        if (callbackFunc) callbackFunc({ error });

        return toast({
          title: error.response?.statusText,
          description: error.response.data?.extraMessage,
          variant: "destructive",
        });
      });
};
