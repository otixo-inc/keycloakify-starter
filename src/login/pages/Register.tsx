import type { JSX } from "keycloakify/tools/JSX";
import { useState } from "react";
import type { LazyOrNot } from "keycloakify/tools/LazyOrNot";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import { getKcClsx, type KcClsx } from "keycloakify/login/lib/kcClsx";
import { clsx } from "keycloakify/tools/clsx";
import type { UserProfileFormFieldsProps } from "keycloakify/login/UserProfileFormFieldsProps";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";

type RegisterProps = PageProps<Extract<KcContext, { pageId: "register.ftl" }>, I18n> & {
    UserProfileFormFields: LazyOrNot<(props: UserProfileFormFieldsProps) => JSX.Element>;
    doMakeUserConfirmPassword: boolean;
};

const searchParams = new URL(window.location.href).searchParams;
const invitationTokenParam = searchParams.get("invitationToken") ?? "";
const invitationWorkspaceNameParam = searchParams.get("invitationWorkspaceName") ?? "";
const ownerNameParam = searchParams.get("ownerName") ?? "";
//const invitationWorkspaceId = searchParams.get("invitationWorkspaceId") ?? "";

export default function Register(props: RegisterProps) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes, UserProfileFormFields, doMakeUserConfirmPassword } = props;

    const { kcClsx } = getKcClsx({
        doUseDefaultCss,
        classes
    });

    const {
        social,
        messageHeader,
        url,
        messagesPerField,
        recaptchaRequired,
        recaptchaVisible,
        recaptchaSiteKey,
        recaptchaAction,
        termsAcceptanceRequired,
        invitationToken,
        invitationWorkspaceName,
        ownerName
    } = kcContext;

    const invitationTokenFinal = invitationToken ?? invitationTokenParam;
    const invitationWorkspaceNameFinal = invitationWorkspaceName ?? invitationWorkspaceNameParam;
    const ownerNameFinal = ownerName ?? ownerNameParam;

    const { msg, msgStr, advancedMsg } = i18n;

    const [isFormSubmittable, setIsFormSubmittable] = useState(false);
    const [areTermsAccepted, setAreTermsAccepted] = useState(false);

    // console.log("url.loginUrl", url.loginUrl);
    // const loginUrl = new URL(url.loginUrl, window.location.origin);
    // if (invitationTokenFinal) {
    //     loginUrl.searchParams.append("invitationToken", invitationTokenFinal);
    // }
    // if (invitationWorkspaceNameFinal) {
    //     loginUrl.searchParams.append("invitationWorkspaceName", invitationWorkspaceNameFinal);
    // }
    // if (ownerNameFinal) {
    //     loginUrl.searchParams.append("ownerName", ownerNameFinal);
    // }

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            headerNode={
                messageHeader !== undefined ? (
                    advancedMsg(messageHeader)
                ) : invitationTokenFinal ? (
                    <strong>{msg("registerInvitationTitle", invitationWorkspaceNameFinal)} </strong>
                ) : (
                    msg("registerTitle")
                )
            }
            displayMessage={messagesPerField.exists("global")}
            displayRequiredFields
        >
            {invitationTokenFinal && (
                <div className="ui menu">
                    <div className="active item">{msg("completeYourRegistration")}</div>
                    <div className="item">
                        <a href={url.loginUrl}>{msg("haveaWeteamAccount")}</a>
                    </div>
                </div>
            )}
            <div className={invitationTokenFinal ? "ui tab" : ""}>
                {invitationTokenFinal && <div className="message">{msg("registerInvitation", ownerNameFinal, invitationWorkspaceNameFinal)}</div>}
                {social?.providers !== undefined && social.providers.length !== 0 && (
                    <div id="kc-social-providers" className={kcClsx("kcFormSocialAccountSectionClass")}>
                        <ul className={kcClsx("kcFormSocialAccountListClass", social.providers.length > 3 && "kcFormSocialAccountListGridClass")}>
                            {social.providers.map((...[p, , providers]) => (
                                <li key={p.alias}>
                                    <a
                                        id={`social-${p.alias}`}
                                        className={kcClsx(
                                            "kcFormSocialAccountListButtonClass",
                                            providers.length > 3 && "kcFormSocialAccountGridItem"
                                        )}
                                        type="button"
                                        href={p.loginUrl}
                                    >
                                        {p.iconClasses && <i className={clsx(kcClsx("kcCommonLogoIdP"), p.iconClasses)} aria-hidden="true"></i>}
                                        <span className={clsx(kcClsx("kcFormSocialAccountNameClass"), p.iconClasses && "kc-social-icon-text")}>
                                            {msg("providerSignUp", kcSanitize(p.displayName))}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <h2>{msg("identity-provider-divider-label")}</h2>
                    </div>
                )}
                <form id="kc-register-form" className={kcClsx("kcFormClass")} action={url.registrationAction} method="post">
                    <UserProfileFormFields
                        kcContext={kcContext}
                        i18n={i18n}
                        kcClsx={kcClsx}
                        onIsFormSubmittableValueChange={setIsFormSubmittable}
                        doMakeUserConfirmPassword={doMakeUserConfirmPassword}
                    />
                    {termsAcceptanceRequired && (
                        <TermsAcceptance
                            i18n={i18n}
                            kcClsx={kcClsx}
                            messagesPerField={messagesPerField}
                            areTermsAccepted={areTermsAccepted}
                            onAreTermsAcceptedValueChange={setAreTermsAccepted}
                        />
                    )}
                    {recaptchaRequired && (recaptchaVisible || recaptchaAction === undefined) && (
                        <div className="form-group">
                            <div className={kcClsx("kcInputWrapperClass")}>
                                <div className="g-recaptcha" data-size="compact" data-sitekey={recaptchaSiteKey} data-action={recaptchaAction}></div>
                            </div>
                        </div>
                    )}
                    <div className={kcClsx("kcFormGroupClass")}>
                        {!invitationTokenFinal && (
                            <div id="kc-form-options" className={kcClsx("kcFormOptionsClass")}>
                                <div className={kcClsx("kcFormOptionsWrapperClass")}>
                                    <span>
                                        <a href={url.loginUrl}>{msg("backToLogin")}</a>
                                    </span>
                                </div>
                            </div>
                        )}
                        {recaptchaRequired && !recaptchaVisible && recaptchaAction !== undefined ? (
                            <div id="kc-form-buttons" className={kcClsx("kcFormButtonsClass")}>
                                <button
                                    className={clsx(
                                        kcClsx("kcButtonClass", "kcButtonPrimaryClass", "kcButtonBlockClass", "kcButtonLargeClass"),
                                        "g-recaptcha"
                                    )}
                                    data-sitekey={recaptchaSiteKey}
                                    data-callback={() => {
                                        (document.getElementById("kc-register-form") as HTMLFormElement).submit();
                                    }}
                                    data-action={recaptchaAction}
                                    type="submit"
                                >
                                    {msg("doRegister")}
                                </button>
                            </div>
                        ) : (
                            <div id="kc-form-buttons" className={kcClsx("kcFormButtonsClass")}>
                                <input
                                    disabled={!isFormSubmittable || (termsAcceptanceRequired && !areTermsAccepted)}
                                    className={kcClsx("kcButtonClass", "kcButtonPrimaryClass", "kcButtonBlockClass", "kcButtonLargeClass")}
                                    type="submit"
                                    value={msgStr("doRegister")}
                                />
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </Template>
    );
}

function TermsAcceptance(props: {
    i18n: I18n;
    kcClsx: KcClsx;
    messagesPerField: Pick<KcContext["messagesPerField"], "existsError" | "get">;
    areTermsAccepted: boolean;
    onAreTermsAcceptedValueChange: (areTermsAccepted: boolean) => void;
}) {
    const { i18n, kcClsx, messagesPerField, areTermsAccepted, onAreTermsAcceptedValueChange } = props;

    const { msg } = i18n;

    return (
        <>
            <div className="form-group">
                <div className={kcClsx("kcInputWrapperClass")}>
                    {msg("termsTitle")}
                    <div id="kc-registration-terms-text">{msg("termsText")}</div>
                </div>
            </div>
            <div className="form-group">
                <div className={kcClsx("kcLabelWrapperClass")}>
                    <input
                        type="checkbox"
                        id="termsAccepted"
                        name="termsAccepted"
                        className={kcClsx("kcCheckboxInputClass")}
                        checked={areTermsAccepted}
                        onChange={e => onAreTermsAcceptedValueChange(e.target.checked)}
                        aria-invalid={messagesPerField.existsError("termsAccepted")}
                    />
                    <label htmlFor="termsAccepted" className={kcClsx("kcLabelClass")}>
                        {msg("acceptTerms")}
                    </label>
                </div>
                {messagesPerField.existsError("termsAccepted") && (
                    <div className={kcClsx("kcLabelWrapperClass")}>
                        <span
                            id="input-error-terms-accepted"
                            className={kcClsx("kcInputErrorMessageClass")}
                            aria-live="polite"
                            dangerouslySetInnerHTML={{
                                __html: kcSanitize(messagesPerField.get("termsAccepted"))
                            }}
                        />
                    </div>
                )}
            </div>
        </>
    );
}
