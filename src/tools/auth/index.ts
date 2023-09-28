import { useIsAuthenticated } from "react-auth-kit";

export const useAuth = () => {
  const isAuthenticated: boolean = useIsAuthenticated()();

  return { isAuthed: isAuthenticated };
};
