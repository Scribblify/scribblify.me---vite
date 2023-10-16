import { FC, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useReduxDispatch, useReduxSelector } from "@/hooks/useRedux";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "../request";
import { setEmailVerificationDialog } from "@/redux/modalSlice";

const EmailVerification: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { emailVerificationDialog } = useReduxSelector((state) => state.modal);
  const codeRef = useRef<HTMLInputElement>(null);
  const dispatch = useReduxDispatch();
  const auth = useAuth();

  const onVerify = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    await auth({
      url: "/user/sign-up/verify",
      body: {
        verification_code: codeRef.current?.value,
      },
      callbackFunc: ({ error, success }) => {
        if (error?.response?.data?.code === "code-expired")
          return dispatch(setEmailVerificationDialog());

        if (success) return dispatch(setEmailVerificationDialog());
      },
    });
    setLoading(false);
  };

  return (
    <Dialog open={emailVerificationDialog}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Email Verification</DialogTitle>
        </DialogHeader>
        <form onSubmit={onVerify}>
          <Input
            required
            ref={codeRef}
            className="mt-3"
            placeholder="Verification code"
            max={40}
          />

          <div className="flex justify-center mt-5">
            <Button type="submit">
              {loading ? (
                <span
                  className="m-3 inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                ></span>
              ) : (
                "Verify"
              )}
            </Button>
          </div>
        </form>
        <div className="flex justify-between">
          <Button
            variant={"link"}
            onClick={() => dispatch(setEmailVerificationDialog())}
          >
            Change email
          </Button>
          <Button variant={"link"}>Didn't get code</Button>
        </div>
        <p className="text-center text-sm text-[#949494] dark:text-[#696969]">
          Code has been sent to your mailbox. This code expire in 5 minutes. If
          you have questions,{" "}
          <a
            className="underline text-[#408CFE] dark:text-[#408CFE]"
            target="_blank"
            href="https://viewstripo.email"
          >
            we're here to help.
          </a>
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default EmailVerification;
