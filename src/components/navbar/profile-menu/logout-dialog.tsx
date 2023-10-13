import type { FC } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useReduxDispatch, useReduxSelector } from "@/hooks/useRedux";
import { setLogOutDialogVisibility } from "@/redux/modalSlice";
import { useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

const LogOut: FC = () => {
  const signOut = useSignOut();
  const navigate = useNavigate();
  const { logOutDialogVisibility } = useReduxSelector((state) => state.modal);
  const dispatch = useReduxDispatch();

  const onSignOut = () => {
    signOut();
    navigate("/");
  };

  return (
    <AlertDialog
      open={logOutDialogVisibility}
      onOpenChange={() => dispatch(setLogOutDialogVisibility())}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will signout you from your
            account.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={onSignOut}
            className="bg-red-500 text-white hover:bg-red-500"
          >
            Sign out
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LogOut;
