import { useEffect } from "react";
import { clsx } from "keycloakify/tools/clsx";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import type { TemplateProps } from "keycloakify/login/TemplateProps";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import { useSetClassName } from "keycloakify/tools/useSetClassName";
import { useInitialize } from "keycloakify/login/Template.useInitialize";
import type { I18n } from "./i18n";
import type { KcContext } from "./KcContext";
import type { ReactNode } from "react";

import MessageImage from "./message.svg";
import IdCard from "./id-card.svg";
import LockImage from "./Lock.svg";

import styles from "./Template.module.css";

export type StepsProps = {
    step: number;
    steps: number;
    children: ReactNode;
};

function Steps(props: StepsProps) {
    return (
        <div className={styles.steps}>
            <div className={styles.stepxofx}>
                {props.step}/{props.steps}
            </div>
            <div className={styles.stepName}>{props.children}</div>
        </div>
    );
}

export type SidebarContentLayoutProps = {
    title: ReactNode;
    subtitle: ReactNode;
    image: ReactNode;
};

function SidebarContentLayout(props: SidebarContentLayoutProps) {
    return (
        <div className={styles.sidebarContentLayout}>
            <div>
                <div className={styles.sidebarContentLayoutTitle}>{props.title}</div>
                <div className={styles.sidebarContentLayoutSubtitle}>{props.subtitle}</div>
            </div>
            <div className={styles.sidebarContentLayoutImage}>{props.image}</div>
        </div>
    );
}

export type SidebarProps = {
    i18n: I18n;
    kcContext: KcContext;
};

function Sidebar(props: SidebarProps) {
    const renderMiddle = () => {
        switch (props.kcContext.pageId) {
            case "login-verify-email-code.ftl":
                return (
                    <SidebarContentLayout
                        title={props.i18n.msg("template.sidebar.verify.title")}
                        subtitle={props.i18n.msg("template.sidebar.verify.subtitle")}
                        image={<img src={MessageImage} />}
                    />
                );

            case "login-update-profile.ftl":
                return (
                    <SidebarContentLayout
                        title={props.i18n.msg("template.sidebar.update-profile.title")}
                        subtitle={props.i18n.msg("template.sidebar.update-profile.subtitle")}
                        image={<img src={IdCard} />}
                    />
                );
            case "login-reset-password.ftl":
                return (
                    <SidebarContentLayout
                        title={props.i18n.msg("template.sidebar.reset-password.title")}
                        subtitle={props.i18n.msg("template.sidebar.reset-password.subtitle")}
                        image={<img src={MessageImage} />}
                    />
                );
            case "login-update-password.ftl":
                return (
                    <SidebarContentLayout
                        title={props.i18n.msg("template.sidebar.update-password.title")}
                        subtitle={props.i18n.msg("template.sidebar.update-password.subtitle")}
                        image={<img src={LockImage} />}
                    />
                );
        }
        return null;
    };

    const renderBottom = () => {
        switch (props.kcContext.pageId) {
            case "login-verify-email-code.ftl":
                return (
                    <Steps step={1} steps={4}>
                        Verify
                    </Steps>
                );
            case "login-update-profile.ftl":
                return (
                    <Steps step={2} steps={4}>
                        Name
                    </Steps>
                );
        }

        return null;
    };

    const middle = renderMiddle();
    const bottom = renderBottom();

    return (
        <div className={clsx(styles.left, middle ? undefined : styles.leftBackgroundImage)}>
            <div>
                <div className={styles.logoContainer}>
                    <div className={styles.logo} />
                    <div className={styles.logoText}>We.Team</div>
                </div>
                <div className={styles.tagline}>One Team. One Goal. One Tool</div>
            </div>
            <div className={styles.middle}>{middle}</div>
            <div>{bottom}</div>
        </div>
    );
}

export default function Template(props: TemplateProps<KcContext, I18n>) {
    const {
        displayInfo = false,
        displayMessage = true,
        //displayRequiredFields = false,
        headerNode,
        subheaderNode,
        socialProvidersNode = null,
        infoNode = null,
        documentTitle,
        bodyClassName,
        kcContext,
        i18n,
        doUseDefaultCss,
        classes,
        children
    } = props;

    const { kcClsx } = getKcClsx({ doUseDefaultCss, classes });

    const { msg, msgStr, currentLanguage, enabledLanguages } = i18n;

    const { realm, auth, url, message, isAppInitiatedAction } = kcContext;

    useEffect(() => {
        document.title = documentTitle ?? msgStr("loginTitle", realm.displayName);
    }, []);

    useSetClassName({
        qualifiedName: "html",
        className: kcClsx("kcHtmlClass")
    });

    useSetClassName({
        qualifiedName: "body",
        className: bodyClassName ?? kcClsx("kcBodyClass")
    });

    const { isReadyToRender } = useInitialize({ kcContext, doUseDefaultCss });

    if (!isReadyToRender) {
        return null;
    }

    return (
        <div className={styles.container}>
            <Sidebar kcContext={props.kcContext} i18n={props.i18n} />
            <div className={styles.top}>
                <div className={styles.logoContainer}>
                    <div className={styles.logo} />
                    <div className={styles.logoText}>We.Team</div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.rightContent}>
                    <div className={kcClsx("kcLoginClass")}>
                        <div id="kc-header" className={kcClsx("kcHeaderClass")}>
                            <div id="kc-header-wrapper" className={kcClsx("kcHeaderWrapperClass")}>
                                {msg("loginTitleHtml", realm.displayNameHtml)}
                            </div>
                        </div>
                        <div>
                            <header className={kcClsx("kcFormHeaderClass")}>
                                {enabledLanguages.length > 1 && (
                                    <div className={kcClsx("kcLocaleMainClass")} id="kc-locale">
                                        <div id="kc-locale-wrapper" className={kcClsx("kcLocaleWrapperClass")}>
                                            <div id="kc-locale-dropdown" className={clsx("menu-button-links", kcClsx("kcLocaleDropDownClass"))}>
                                                <button
                                                    tabIndex={1}
                                                    id="kc-current-locale-link"
                                                    aria-label={msgStr("languages")}
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                    aria-controls="language-switch1"
                                                >
                                                    {currentLanguage.label}
                                                </button>
                                                <ul
                                                    role="menu"
                                                    tabIndex={-1}
                                                    aria-labelledby="kc-current-locale-link"
                                                    aria-activedescendant=""
                                                    id="language-switch1"
                                                    className={kcClsx("kcLocaleListClass")}
                                                >
                                                    {enabledLanguages.map(({ languageTag, label, href }, i) => (
                                                        <li key={languageTag} className={kcClsx("kcLocaleListItemClass")} role="none">
                                                            <a
                                                                role="menuitem"
                                                                id={`language-${i + 1}`}
                                                                className={kcClsx("kcLocaleItemClass")}
                                                                href={href}
                                                            >
                                                                {label}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {(() => {
                                    const node = !(auth !== undefined && auth.showUsername && !auth.showResetCredentials) ? (
                                        <div className={styles.titleContainer}>
                                            <span className={styles.titleContainerTitle}>{headerNode}</span>
                                            {subheaderNode && <span className={styles.titleContainerSubTitle}>{subheaderNode}</span>}
                                        </div>
                                    ) : (
                                        <div id="kc-username" className={kcClsx("kcFormGroupClass")}>
                                            <label id="kc-attempted-username">{auth.attemptedUsername}</label>
                                            <a id="reset-login" href={url.loginRestartFlowUrl} aria-label={msgStr("restartLoginTooltip")}>
                                                <div className="kc-login-tooltip">
                                                    <i className={kcClsx("kcResetFlowIcon")}></i>
                                                    <span className="kc-tooltip-text">{msg("restartLoginTooltip")}</span>
                                                </div>
                                            </a>
                                        </div>
                                    );

                                    // if (displayRequiredFields) {
                                    //     return (
                                    //         <div className={kcClsx("kcContentWrapperClass")}>
                                    //             <div className={clsx(kcClsx("kcLabelWrapperClass"), "subtitle")}>
                                    //                 <span className="subtitle">
                                    //                     <span className="required">*</span>
                                    //                     {msg("requiredFields")}
                                    //                 </span>
                                    //             </div>
                                    //             <div className="col-md-10">{node}</div>
                                    //         </div>
                                    //     );
                                    // }

                                    return node;
                                })()}
                            </header>
                            <div id="kc-content">
                                <div id="kc-content-wrapper">
                                    {/* App-initiated actions should not see warning messages about the need to complete the action during login. */}
                                    {displayMessage && message !== undefined && (message.type !== "warning" || !isAppInitiatedAction) && (
                                        <div
                                            className={clsx(
                                                `alert-${message.type}`,
                                                kcClsx("kcAlertClass"),
                                                `pf-m-${message?.type === "error" ? "danger" : message.type}`
                                            )}
                                        >
                                            <div className="pf-c-alert__icon">
                                                {message.type === "success" && <span className={kcClsx("kcFeedbackSuccessIcon")}></span>}
                                                {message.type === "warning" && <span className={kcClsx("kcFeedbackWarningIcon")}></span>}
                                                {message.type === "error" && <span className={kcClsx("kcFeedbackErrorIcon")}></span>}
                                                {message.type === "info" && <span className={kcClsx("kcFeedbackInfoIcon")}></span>}
                                            </div>
                                            <span
                                                className={kcClsx("kcAlertTitleClass")}
                                                dangerouslySetInnerHTML={{
                                                    __html: kcSanitize(message.summary)
                                                }}
                                            />
                                        </div>
                                    )}
                                    {children}
                                    {auth !== undefined && auth.showTryAnotherWayLink && (
                                        <form id="kc-select-try-another-way-form" action={url.loginAction} method="post">
                                            <div className={kcClsx("kcFormGroupClass")}>
                                                <input type="hidden" name="tryAnotherWay" value="on" />
                                                <a
                                                    href="#"
                                                    id="try-another-way"
                                                    onClick={() => {
                                                        document.forms["kc-select-try-another-way-form" as never].submit();
                                                        return false;
                                                    }}
                                                >
                                                    {msg("doTryAnotherWay")}
                                                </a>
                                            </div>
                                        </form>
                                    )}
                                    {socialProvidersNode}
                                    {displayInfo && (
                                        <div id="kc-info" className={kcClsx("kcSignUpClass")}>
                                            <div id="kc-info-wrapper" className={kcClsx("kcInfoAreaWrapperClass")}>
                                                {infoNode}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
