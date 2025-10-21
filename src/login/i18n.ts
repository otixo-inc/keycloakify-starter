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
      doSubmit: "Verify",
      doCancel: "Cancel",
      VerifyEmailInvalidCode: "Failed to verify the code. Please try again.",
      registerInvitation: "After finalizing your registration, you’ll automatically join {0}’s TeamSpace \"{1}\".",
      registerInvitationTitle: "Join \"{0}\"",
      completeYourRegistration: "Complete Your Registration",
      haveaWeteamAccount: "I have a We.Team Account",
      "newsletter.yes": "It's OK to send me emails about We.Team",
      "acceptTerms": "By signing up you agree to We.Team’s <a href='https://we.team/en/terms-of-service-basic' target='_blank' rel='noopener noreferrer'>Terms of Service</a> and <a href='https://we.team/en/privacy-policy-basic' target='_blank' rel='noopener noreferrer'>Privacy Policy</a>",
      "termsText": "By signing up you agree to We.Team’s <a href='https://we.team/en/terms-of-service-basic' target='_blank' rel='noopener noreferrer'>Terms of Service</a> and <a href='https://we.team/en/privacy-policy-basic' target='_blank' rel='noopener noreferrer'>Privacy Policy</a>",
      registrationTermsText: "By continuing you agree to We.Team’s <a href='https://we.team/en/terms-of-service-basic' target='_blank' rel='noopener noreferrer'>Terms of Service</a> and <a href='https://we.team/en/privacy-policy-basic' target='_blank' rel='noopener noreferrer'>Privacy Policy</a>",
      "alreadyHaveAnAccount": "Already have an account?",
      "register.backToLogin": "Sign In",
      "error-invalid-credentials": "Invalid email address or invalid password",
      "webauthn-error-register-verification": "There was an error adding your passkey. Please try again.",
      "webauthn-registration-info": "<p>Passkeys validate your identity using touch, facial recognition, a device password, or a PIN.</p><p>When you click <strong>Register</strong> your device will guide you through the Passkey registration process.</p>"
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
      doSubmit: "Überprüfen",
      doCancel: "Abbrechen",
      VerifyEmailInvalidCode: "Der Code ist ungültig. Bitte versuche es erneut.",
      registerInvitation: "Nachdem du die Registrierung abgeschlossen hast, trittst du {0}s TeamSpace \"{1}\" automatisch bei.",
      registerInvitationTitle: "\"{0}\" beitreten",
      completeYourRegistration: "Registrierung abschließen",
      haveaWeteamAccount: "Ich habe ein We.Team Benutzerkonto",
      "newsletter.yes": "Ich möchte Tipps, News und Angebote zu We.Team per E-Mail erhalten.",
      "acceptTerms": "Mit deiner Registrierung stimmst du den <a href='https://we.team/nutzungsbedingungen-basic' target='_blank' rel='noopener noreferrer'>Nutzungsbedingungen</a> und <a href='https://we.team/datenschutzrichtlinie-basic' target='_blank' rel='noopener noreferrer'>Datenschutzrichtlinie</a> von We.Team zu",
      "termsText": "Mit deiner Registrierung stimmst du den <a href='https://we.team/nutzungsbedingungen-basic' target='_blank' rel='noopener noreferrer'>Nutzungsbedingungen</a> und <a href='https://we.team/datenschutzrichtlinie-basic' target='_blank' rel='noopener noreferrer'>Datenschutzrichtlinie</a> von We.Team zu",
      registrationTermsText: "Mit deiner Registrierung stimmst du den <a href='https://we.team/nutzungsbedingungen-basic' target='_blank' rel='noopener noreferrer'>Nutzungsbedingungen</a> und <a href='https://we.team/datenschutzrichtlinie-basic' target='_blank' rel='noopener noreferrer'>Datenschutzrichtlinie</a> von We.Team zu",
      "alreadyHaveAnAccount": "Du hast bereits ein Konto?",
      "register.backToLogin": "Anmelden",
      "error-invalid-credentials": "Ungültige E-Mail-Adresse oder ungültiges Passwort",
      "webauthn-error-register-verification": "Das Hinzufügen des Passkeys ist fehlgeschlagen. Bitte versuche es erneut.",
      "webauthn-registration-info": "<p>Passkeys validate your identity using touch, facial recognition, a device password, or a PIN.</p><p>When you click <strong>Register</strong> your device will guide you through the Passkey registration process.</p>"
    }
    // cspell: enable
  }).build();

type I18n = typeof ofTypeI18n;

export { useI18n, type I18n };
