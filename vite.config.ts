import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { keycloakify } from "keycloakify/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    keycloakify({
      accountThemeImplementation: "none",
      themeName: ["weteam", "weteam-hide-idp"],
      startKeycloakOptions: {
        keycloakExtraArgs: [
          "--spi-required-action-VERIFY_EMAIL_CODE-code-length=6",
          "--spi-required-action-VERIFY_EMAIL_CODE-code-symbols=0123456789",
        ],
        extensionJars: ["https://github.com/RedFroggy/keycloak-verify-email-by-code/releases/download/v26.2.0/keycloak-verify-email-by-code-26.2.0.jar"]
      }
    })
  ]
});
