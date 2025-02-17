import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import App from "./App.tsx";
import "./locales/i18n.ts";
import { GoogleOAuthProvider } from "@react-oauth/google";

// react query
const queeryClient = new QueryClient();
// 1024532969830-6r9826loqvct34be4eu52qbca8pt0us2.apps.googleusercontent.com
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queeryClient}>
      <GoogleOAuthProvider clientId="94142909577-8qav3d7hpcms630ej23g1d86rurcvqun.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
