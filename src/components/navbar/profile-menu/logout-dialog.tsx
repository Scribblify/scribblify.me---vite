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

const LogOut: FC = () => {
  const { logOutDialogVisibility } = useReduxSelector((state) => state.modal);
  const dispatch = useReduxDispatch();

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
          <AlertDialogAction>Sign out</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LogOut;
