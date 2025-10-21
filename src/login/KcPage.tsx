import { Suspense, lazy, useMemo } from "react";
// import Helmet from "react-helmet";
import type { ClassKey } from "keycloakify/login";
import type { KcContext } from "./KcContext";
import { useI18n } from "./i18n";
import DefaultPage from "keycloakify/login/DefaultPage";
import Template from "keycloakify/login/Template";

import "./main.css";

const LoginVerifyEmailCode = lazy(() => import("./pages/LoginVerifyEmailCode"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const WebauthnRegister = lazy(() => import("./pages/WebauthnRegister"));

const UserProfileFormFields = lazy(() => import("./UserProfileFormFields"));

const doMakeUserConfirmPassword = true;

export default function KcPage(props: { kcContext: KcContext }) {
    const { kcContext } = props;

    const { i18n } = useI18n({ kcContext });

    useCustomCss(kcContext);

    return (
        <Suspense>
            {/* <Helmet>
                <script
                    type="text/javascript"
                    src="https://cdn.cookielaw.org/consent/66f89c34-c2ce-406e-a6aa-fafabbf962c6/OtAutoBlock.js"
                ></script>
                <script
                    src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"
                    type="text/javascript"
                    charSet="UTF-8"
                    data-domain-script="66f89c34-c2ce-406e-a6aa-fafabbf962c6"
                ></script>
                <script type="text/javascript">function OptanonWrapper() {}</script>
            </Helmet> */}
            {(() => {
                switch (kcContext.pageId) {
                    case "webauthn-register.ftl":
                        return (
                            <WebauthnRegister
                                {...{ kcContext, i18n, classes }}
                                Template={Template}
                                doUseDefaultCss={true}
                            />
                        );
                    case "login-verify-email-code.ftl":
                        return (
                            <LoginVerifyEmailCode
                                {...{ kcContext, i18n, classes }}
                                Template={Template}
                                doUseDefaultCss={true}
                            />
                        );
                    case "register.ftl":
                        return (
                            <Register
                                {...{ kcContext, i18n, classes }}
                                Template={Template}
                                doUseDefaultCss={true}
                                UserProfileFormFields={UserProfileFormFields}
                                doMakeUserConfirmPassword={doMakeUserConfirmPassword}
                            />
                        );
                    case "login.ftl":
                        return (
                            <Login
                                {...{ kcContext, i18n, classes }}
                                Template={Template}
                                doUseDefaultCss={true}
                            />
                        );
                    default:
                        return (
                            <DefaultPage
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classes}
                                Template={Template}
                                doUseDefaultCss={true}
                                UserProfileFormFields={UserProfileFormFields}
                                doMakeUserConfirmPassword={doMakeUserConfirmPassword}
                            />
                        );
                }
            })()}
        </Suspense>
    );
}

const classes = {} satisfies { [key in ClassKey]?: string };

/**
 * We can apply css to specific pages or specific themes
 */
function useCustomCss(kcContext: KcContext) {
    useMemo(() => {
        switch (kcContext.pageId) {
            case "login.ftl":
            case "register.ftl":
            case "login-verify-email-code.ftl":
                import("./button.css");
                break;
        }
        switch (kcContext.pageId) {
            case "terms.ftl":
                import("./terms.css");
                break;
            case "login-reset-otp.ftl":
                import("./login-reset-otp.css");
                break;
            case "login-idp-link-confirm.ftl":
                import("./login-idp-link-confirm.css");
                break;
            case "login-idp-link-email.ftl":
                import("./login-idp-link-email.css");
                break;
            case "register.ftl":
                import("./register.css");
                break;
            case "login-otp.ftl":
                import("./login-otp.css");
                break;
            case "webauthn-authenticate.ftl":
                import("./webauthn-authenticate.css");
                break;
            case "webauthn-register.ftl":
                import("./webauthn-register.css");
                break;
            case "login-recovery-authn-code-config.ftl":
                import("./login-recovery-authn-code-config.css");
                break;
        }
        switch (kcContext.themeName) {
            case "weteam-hide-idp":
                import("./hide-identity-providers.css");
                break;
        }
    }, []);
}
