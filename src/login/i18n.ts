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
      providerSignUp: "Sign up with {0}",
      email_code: "",
      emailVerifyTitle: "Please verify your Email",
      emailVerifyInstruction1: "You're almost done! Please enter the code we sent to <strong>{0}</strong>",
      emailVerifyInstruction2: "Didn't receive the code?",
      emailVerifyInstruction3: "Can't find your code? Check your spam folder",
      doClickHere: "Resend code",
      doSubmit: "Verify",
      doCancel: "Cancel",
      VerifyEmailInvalidCode: "Failed to verify the code. Please try again.",
      registerInvitation: "After finalizing your registration, you’ll automatically join {0}’s TeamSpace \"{1}\".",
      registerInvitationTitle: "Complete Your Registration"
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
      providerSignUp: "Mit {0} registrieren",
      email_code: "",
      emailVerifyTitle: "Bitte bestätige deine E-Mail-Adresse",
      emailVerifyInstruction1: "Du bist fast fertig! Bitte gib den Code ein, den wir dir an <strong>{0}</strong> gesendet haben",
      emailVerifyInstruction2: "Du hast den Code nicht erhalten?",
      emailVerifyInstruction3: "Du kannst deinen Code nicht finden? Schaue in deinem Spam-Ordner nach!",
      doClickHere: "Code erneut senden",
      doSubmit: "Überprüfen",
      doCancel: "Abbrechen",
      VerifyEmailInvalidCode: "Der Code ist ungültig. Bitte versuche es erneut.",
      registerInvitation: "Nachdem du die Registrierung abgeschlossen hast, trittst du {0}s TeamSpace \"{1}\" automatisch bei.",
      registerInvitationTitle: "Registrierung abschließen"
    }
    // cspell: enable
  }).build();

type I18n = typeof ofTypeI18n;

export { useI18n, type I18n };
