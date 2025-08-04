/* eslint-disable @typescript-eslint/no-unused-vars */
import { i18nBuilder } from "keycloakify/login";
import type { ThemeName } from "../kc.gen";

/** @see: https://docs.keycloakify.dev/features/i18n */
const { useI18n, ofTypeI18n } = i18nBuilder.withThemeName<ThemeName>()
  .withCustomTranslations({
    en: {
      registerTitle: "Sign Up for Free",
      loginAccountTitle: "Welcome back! Sign In",
      loginTitleHtml: "",
      noAccount: "You do not have an account?",
      doRegister: "Sign Up here",
      doForgotPassword: "Forgot your password?",
      usernameOrEmail: "Email Address",
      password: "Password",
      "identity-provider-divider-label": "OR",
      providerSignIn: "Sign in with {0}",
      providerSignUp: "Sign up with {0}"
    },
    // cspell: disable
    de: {
      registerTitle: "Registriere dich kostenfrei",
      loginAccountTitle: "Willkommen zurück! Melde dich an",
      loginTitleHtml: "",
      noAccount: "Du hast noch kein Konto?",
      doRegister: "Kostenlos registrieren",
      doForgotPassword: "Passwort vergessen?",
      usernameOrEmail: " E-Mail-Adresse",
      password: "Passwort",
      "identity-provider-divider-label": "OR",
      providerSignIn: "Mit {0} anmelden",
      providerSignUp: "Mit {0} registrieren"
    }
    // cspell: enable
  }).build();

type I18n = typeof ofTypeI18n;

export { useI18n, type I18n };
