import type { FC } from "react";
import { AuthProvider } from "react-auth-kit";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { HelmetProvider } from "react-helmet-async";
import { useReduxSelector } from "@/hooks/useRedux";

interface ProviderProps {
  children?: React.ReactNode;
}

const ProviderConfig: FC<ProviderProps> = ({ children }) => {
  const { theme } = useReduxSelector((state) => state.theme);
  const queryClient = new QueryClient();

  return (
    <AuthProvider
      authType={"cookie"}
      authName={"_auth"}
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}
    >
      <ThemeProvider
        key={"theme"}
        defaultTheme={theme}
        storageKey="vite-ui-theme"
      >
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />
          <HelmetProvider>
            <BrowserRouter>{children}</BrowserRouter>
          </HelmetProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default ProviderConfig;
