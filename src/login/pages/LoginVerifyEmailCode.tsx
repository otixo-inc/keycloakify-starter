import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";

import "./LoginVerifyEmailCode.css";

export default function LoginVerifyEmailCode(props: PageProps<Extract<KcContext, { pageId: "login-verify-email-code.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { kcClsx } = getKcClsx({
        doUseDefaultCss,
        classes
    });

    const { msg, msgStr } = i18n;

    const { user, url, messagesPerField, isAppInitiatedAction } = kcContext;

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            displayInfo={true}
            infoNode={
                <p className="instruction">
                    {msg("emailVerifyInstruction2")}
                    <a href="">{msg("doClickHere")}</a>
                    <br />
                    {msg("emailVerifyInstruction3")}
                </p>
            }
            headerNode={msg("emailVerifyTitle")}
        >
            <p className="instruction">{msg("emailVerifyInstruction1", user.email)}</p>
            <form id="kc-verify-email-code-form" className={kcClsx("kcFormClass")} action={url.loginAction} method="post">
                <div className={kcClsx("kcFormGroupClass", messagesPerField.printIfExists("email_code", "kcFormGroupErrorClass"))}>
                    <div className={kcClsx("kcLabelWrapperClass")}>
                        <label htmlFor="email_code" className={kcClsx("kcLabelClass")}>
                            {msg("email_code")}
                        </label>
                    </div>
                    <div className={kcClsx("kcInputWrapperClass")}>
                        <input
                            type="text"
                            id="email_code"
                            name="email_code"
                            className={kcClsx("kcInputClass")}
                            aria-invalid={messagesPerField.exists("email_code")}
                        />
                    </div>
                </div>

                <div className={kcClsx("kcFormGroupClass")}>
                    <div id="kc-form-options" className={kcClsx("kcFormOptionsClass")}>
                        <div className={kcClsx("kcFormOptionsWrapperClass")}></div>
                    </div>

                    <div id="kc-form-buttons" className={kcClsx("kcFormButtonsClass")}>
                        {isAppInitiatedAction ? (
                            <div className="verifyButtons">
                                <input
                                    className={kcClsx("kcButtonClass", "kcButtonPrimaryClass", "kcButtonLargeClass")}
                                    type="submit"
                                    value={msgStr("doSubmit")}
                                />
                                <button className={kcClsx("kcButtonClass", "kcButtonDefaultClass")} type="submit" name="cancel-aia" value="true">
                                    {msgStr("doCancel")}
                                </button>
                            </div>
                        ) : (
                            <input
                                className={kcClsx("kcButtonClass", "kcButtonPrimaryClass", "kcButtonBlockClass", "kcButtonLargeClass")}
                                type="submit"
                                value={msgStr("doSubmit")}
                            />
                        )}
                    </div>
                </div>
            </form>
        </Template>
    );
}
