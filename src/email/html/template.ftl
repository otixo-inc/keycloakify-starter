<#--
  This file has been claimed for ownership from @keycloakify/email-native version 260007.0.0.
  To relinquish ownership and restore this file to its original content, run the following command:
  
  $ npx keycloakify own --path "email/html/template.ftl" --revert
-->

<#macro emailLayout>
<!DOCTYPE html>
<html
  lang="en"
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <meta charset="utf-8" />
    <!-- utf-8 works for most cases -->
    <meta name="viewport" content="width=device-width" />
    <!-- Forcing initial-scale shouldn't be necessary -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!-- Use the latest (edge) version of IE rendering engine -->
    <meta name="x-apple-disable-message-reformatting" />
    <!-- Disable auto-scale in iOS 10 Mail entirely -->
    <meta
      name="format-detection"
      content="telephone=no,address=no,email=no,date=no,url=no"
    />
    <!-- Tell iOS not to automatically link certain text strings. -->
    <meta name="color-scheme" content="light" />
    <meta name="supported-color-schemes" content="light" />
    <title></title>
    <!--   The title tag shows in email notifications, like Android 4.4. -->
    <link
      href="https://fonts.googleapis.com/css?family=Lato:400,700"
      rel="stylesheet"
    />
    <!-- What it does: Makes background images in 72ppi Outlook render at correct size. -->
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG />
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->

    <!-- Web Font / @font-face : BEGIN -->
    <!-- NOTE: If web fonts are not required, lines 23 - 41 can be safely removed. -->

    <!-- Desktop Outlook chokes on web font references and defaults to Times New Roman, so we force a safe fallback font. -->
    <!--[if mso]>
      <style>
        * {
            body, table, td, p, a, h1, h2, h3, h4, h5, h6 {font-family: Arial, Helvetica, sans-serif !important;
        }
      </style>
    <![endif]-->

    <!-- All other clients get the webfont reference; some will render the font and others will silently fail to the fallbacks. More on that here: http://stylecampaign.com/blog/2015/02/webfont-support-in-email/ -->
    <!--[if !mso]><!-->
    <link
      href="https://fonts.googleapis.com/css?family=Lato:400,700"
      rel="stylesheet"
      type="text/css"
    />
    <!--<![endif]-->

    <!-- Web Font / @font-face : END -->

    <!-- CSS Reset : BEGIN -->
    <style>
      /* What it does: Tells the email client that only light styles are provided but the client can transform them to dark. A duplicate of meta color-scheme meta tag above. */
      :root {
        color-scheme: light;
        supported-color-schemes: light;
      }

      /* What it does: Remove spaces around the email design added by some email clients. */
      /* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */
      html,
      body {
        margin: 0 auto !important;
        padding: 0 !important;
        height: 100% !important;
        width: 100% !important;
      }

      /* What it does: Stops email clients resizing small text. */
      * {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }

      /* What it does: Centers email on Android 4.4 */
      div[style*="margin: 16px 0"] {
        margin: 0 !important;
      }

      /* What it does: forces Samsung Android mail clients to use the entire viewport */
      #MessageViewBody,
      #MessageWebViewDiv {
        width: 100% !important;
      }

      /* What it does: Stops Outlook from adding extra spacing to tables. */
      table,
      td {
        mso-table-lspace: 0pt !important;
        mso-table-rspace: 0pt !important;
      }

      /* What it does: Fixes webkit padding issue. */
      table {
        border-spacing: 0 !important;
        border-collapse: collapse !important;
        table-layout: fixed !important;
        margin: 0 auto !important;
      }

      /* What it does: Uses a better rendering method when resizing images in IE. */
      img {
        -ms-interpolation-mode: bicubic;
      }

      /* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */
      a {
        text-decoration: none;
      }

      /* What it does: A work-around for email clients meddling in triggered links. */
      a[x-apple-data-detectors],  /* iOS */
        .unstyle-auto-detected-links a,
        .aBn {
        border-bottom: 0 !important;
        cursor: default !important;
        color: inherit !important;
        text-decoration: none !important;
        font-size: i8herit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: 28herit !important;
      }

      /* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
      .a6S {
        display: none !important;
        opacity: 0.01 !important;
      }

      /* What it does: Prevents Gmail from changing the text color in conversation threads. */
      .im {
        color: inherit !important;
      }

      /* If the above doesn't work, add a .g-img class to any image in question. */
      img.g-img + div {
        display: none !important;
      }

      /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
      /* Create one of these media queries for each additional viewport size you'd like to fix */

      /* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
      @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
        u ~ div .email-container {
          min-width: 320px !important;
        }
      }
      /* iPhone 6, 6S, 7, 8, and X */
      @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
        u ~ div .email-container {
          min-width: 375px !important;
        }
      }
      /* iPhone 6+, 7+, and 8+ */
      @media only screen and (min-device-width: 414px) {
        u ~ div .email-container {
          min-width: 414px !important;
        }
      }
    </style>
    <!-- CSS Reset : END -->

    <!-- Progressive Enhancements : BEGIN -->
    <style>
      /* What it does: Hover styles for buttons */
      .button-td,
      .button-a {
        transition: all 100ms ease-in;
      }
      .button-td-primary:hover,
      .button-a-primary:hover {
        background: #00a7c4 !important;
        border-color: #00a7c4 !important;
      }

      /* Media Queries */
      @media screen and (max-width: 600px) {
        /* What it does: Adjust typography on small screens to improve readability */
        .email-container p {
          font-size: 18px !important;
        }
      }
    </style>
    <!-- Progressive Enhancements : END -->
  </head>
  <!--
	The email background color (#FFFFFF) is defined in three places:
	1. body tag: for most email clients
	2. center tag: for Gmail and Inbox mobile apps and web versions of Gmail, GSuite, Inbox, Yahoo, AOL, Libero, Comcast, freenet, Mail.ru, Orange.fr
	3. mso conditional: For Windows 10 Mail
-->
  <body
    width="100%"
    style="
      margin: 0;
      padding: 0 !important;
      mso-line-height-r28e: exactly;
      background-color: #f1f1f1;
    "
  >
    <!--[if mso]>
      <style type="text/css">
        body,
        table,
        td,
        p,
        a,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: Arial, Helvetica, sans-serif !important;
        }
      </style>
    <![endif]-->
    <center
      role="article"
      aria-roledescription="email"
      lang="en"
      style="width: 100%; background-color: #f1f1f1"
    >
      <!--[if mso | IE]>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F1F1F1;">
    <tr>
    <td>
    <![endif]-->

      <!-- Visually Hidden Preheader Text : BEGIN -->
      <div
        style="max-height: 0; overflow: hidden; mso-hide: all"
        aria-hidden="true"
      >
        <!-- (Optional) This text will appear in the inbox preview, but not the email body. It can be used to supplement the email subject line or even summarize the email's contents. Extended text preheaders (~490 characters) seems like a better UX for anyone using a screenreader or voice-command apps like Siri to dictate the contents of an email. If this text is not included, email clients will automatically populate it using the text (including image alt text) at the start of the email's body. -->
      </div>
      <!-- Visually Hidden Preheader Text : END -->

      <!-- Create white space after the desired preview text so email clients don’t pull other distracting text into the inbox preview. Extend as necessary. -->
      <!-- Preview Text Spacing Hack : BEGIN -->
      <div
        style="
          display: none;
          font-size: 18x;
          line-height: 28x;
          max-height: 0px;
          max-width: 0px;
          opacity: 0;
          overflow: hidden;
          mso-hide: all;
          font-family: 'Lato', sans-serif;
        "
      >
        &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
      </div>
      <!-- Preview Text Spacing Hack : END -->

      <!-- Full Bleed Background Section : BEGIN -->
      <table
        role="presentation"
        cellspacing="0"
        cellpadding="0"
        border="0"
        width="100%"
        style="
          background-image: url('https://cdn.otixo.com/email-template-images/weteam-blue-gradient.jpg');
          background-repeat: no-repeat;
          background-position: top center;
          background-size: cover;
          background-color: #00a7c4;
        "
      >
        <tr>
          <td>
            <!--
                        Set the email width. Defined in two places:
                        1. max-width for all clients except Desktop Windows Outlook, allowing the email to squish on narrow but never go wider than 600px.
                        2. MSO tags for Desktop Windows Outlook enforce a 600px width.
                    -->
            <div
              align="center"
              style="max-width: 600px; margin: auto"
              class="email-container"
            >
              <!--[if mso]>
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" align="center">
                        <tr>
                        <td>
                        <![endif]-->
              <table
                role="presentation"
                cellspacing="0"
                cellpadding="0"
                border="0"
                width="100%"
              >
                <tr>
                  <td style="padding: 25px 15px 20px 0px">
                    <img
                      src="https://cdn.otixo.com/email-template-images/WeTeam-Logo-Horizontal-WhiteFont.png"
                      width="260"
                      alt="we team logo"
                      border="0"
                    />
                  </td>
                </tr>
              </table>
              <!--[if mso]>
      </td>
      </tr>
      </table>
      <![endif]-->
            </div>
          </td>
        </tr>
      </table>
      <table
        role="presentation"
        cellspacing="0"
        cellpadding="0"
        border="0"
        width="100%"
        style="background-color: #ffffff"
      >
        <tr>
          <td>
            <div
              align="center"
              style="max-width: 600px; margin: auto"
              class="email-container"
            >
              <!--[if mso]>
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" align="center">
      <tr>
      <td>
      <![endif]-->
              <table
                role="presentation"
                cellspacing="0"
                cellpadding="0"
                border="0"
                width="100%"
              >
                <tr>
                  <td
                    style="
                      padding: 30px 20px 0px 20px;
                      text-align: left;
                      font-family: 'Lato', Arial, Helvetica, sans-serif;
                      font-size: 37px;
                      line-height: 48px;
                      color: #1c1c1c;
                    "
                  >
                    <p style="margin: 0px 0px 0px 0px">
                      ${msg("template.title")}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    style="
                      padding: 0px 20px 0px 20px;
                      text-align: left;
                      font-family: 'Lato', Arial, Helvetica, sans-serif;
                      font-size: 18px;
                      line-height: 28px;
                      color: #1c1c1c;
                    "
                  >
                    <p style="margin: 0px 0px 0px 0px">
                      ${msg("template.subTitle")}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    style="
                      padding: 40px 20px 20px 20px;
                      text-align: left;
                      font-family: 'Lato', Arial, Helvetica, sans-serif;
                      font-size: 18px;
                      line-height: 28px;
                      color: #1c1c1c;
                    "
                  >
                    <#nested>
                  </td>
                </tr>
                <tr>
                  <td
                    style="
                      padding: 40px 20px 40px 20px;
                      text-align: left;
                      font-family: 'Lato', sans-serif;
                      font-size: 18px;
                      line-height: 28px;
                      color: #1c1c1c;
                    "
                  >
                    <p style="margin: 0">${msg("template.cheers")},</p>
                    <p style="margin: 0">${msg("template.yourWeTeam")}</p>
                  </td>
                </tr>
                <tr>
                  <td
                    style="
                      padding: 0px 20px 60px 20px;
                      text-align: left;
                      font-family: 'Lato', sans-serif;
                      font-size: 18px;
                      line-height: 28px;
                      color: #1c1c1c;
                    "
                  >
                    <table
                      role="presentation"
                      style="margin: auto"
                      cellspacing="0"
                      cellpadding="11"
                      border="0"
                      align="center"
                    >
                      <tbody>
                        <tr>
                          <td>
                            <p
                              style="
                                font-family: 'Lato', sans-serif;
                                font-size: 18px;
                                line-height: 28px;
                                color: #1c1c1c;
                                text-align: center;
                              "
                            >
                              ${msg("template.takeWeTeamWithYou")}
                            </p>
                            <p style="margin: 0px; text-align: center">
                              <a
                                href="https://apps.apple.com/us/app/otixo-spaces/id1447606451"
                                ><img
                                  alt=""
                                  src="https://otixo-cdn.s3.amazonaws.com/email-template-images/button-app-store.png"
                                  style="width: 108px; height: 36px" /></a
                              >&nbsp;&nbsp;&nbsp;
                              <a
                                href="https://apps.apple.com/us/app/mac/id1447606451?ls=1&amp;mt=12"
                                ><img
                                  alt=""
                                  src="https://otixo-cdn.s3.amazonaws.com/email-template-images/button-mac-app-store.png"
                                  style="width: 141px; height: 36px" /></a
                              >&nbsp;&nbsp;&nbsp;
                              <a
                                href="https://play.google.com/store/apps/details?id=com.otixo.workspaces"
                                ><img
                                  alt=""
                                  src="https://otixo-cdn.s3.amazonaws.com/email-template-images/button-google-play.png"
                                  style="width: 121px; height: 36px" /></a
                              >&nbsp;&nbsp;&nbsp;
                              <a
                                href="https://www.microsoft.com/p/weteam/9wzdncrdh027?ocid=badge&amp;rtc=2#activetab=pivot:overviewtab"
                                ><img
                                  alt=""
                                  src="https://otixo-cdn.s3.amazonaws.com/email-template-images/button-microsoft.png"
                                  style="width: 100px; height: 36px"
                                />
                              </a>
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </table>
              <!--[if mso]>
                          </td>
                          </tr>
                          </table>
                          <![endif]-->
            </div>
          </td>
        </tr>
      </table>
      <table
        role="presentation"
        cellspacing="0"
        cellpadding="0"
        border="0"
        width="100%"
        style="background-color: #f1f1f1"
      >
        <tr>
          <td>
            <div
              align="center"
              style="max-width: 600px; margin: auto"
              class="email-container"
            >
              <!--[if mso]>
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" align="center">
                          <tr>
                          <td>
                          <![endif]-->
              <table
                role="presentation"
                cellspacing="0"
                cellpadding="0"
                border="0"
                width="100%"
              >
                <tr>
                  <td
                    style="
                      padding: 60px 20px 20px 20px;
                      text-align: left;
                      font-family: 'Lato', sans-serif;
                      font-size: 16px;
                      line-height: 24px;
                      text-align: center;
                      color: #1c1c1c;
                    "
                  >
                    <p style="margin: 0">
                      <a
                        href="https://www.facebook.com/we.team.collaboration"
                        target="_blank"
                      >
                        <img
                          width="24"
                          height="24"
                          src="https://cdn.otixo.com/email-template-images/facebook.png"
                          alt="facebook"
                        /> </a
                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <a
                        href="https://www.instagram.com/we.team.collaboration/"
                        target="_blank"
                      >
                        <img
                          width="24"
                          height="24"
                          src="https://cdn.otixo.com/email-template-images/instagram.png"
                          alt="instagram"
                        /> </a
                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <a href="https://twitter.com/otixo" target="_blank">
                        <img
                          width="24"
                          height="24"
                          src="https://cdn.otixo.com/email-template-images/twitter.png"
                          alt="twitter"
                        /> </a
                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <a
                        href="https://www.linkedin.com/company/we-team"
                        target="_blank"
                      >
                        <img
                          width="24"
                          height="24"
                          src="https://cdn.otixo.com/email-template-images/linkedin.png"
                          alt="linkedin"
                        /> </a
                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <a
                        href="https://www.youtube.com/channel/UCkvz9XomjM9wmKZ7xJhK6jg"
                        target="_blank"
                      >
                        <img
                          width="24"
                          height="24"
                          src="https://cdn.otixo.com/email-template-images/youtube.png"
                          alt="youtube"
                        />
                      </a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    style="
                      padding: 20px;
                      text-align: left;
                      font-family: 'Lato', sans-serif;
                      font-size: 16px;
                      line-height: 24px;
                      text-align: center;
                      color: #1c1c1c;
                    "
                  >
                    <p style="margin: 0">
                      ${msg("template.copyright")}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    style="
                      padding: 20px;
                      text-align: left;
                      font-family: 'Lato', sans-serif;
                      font-size: 16px;
                      line-height: 24px;
                      text-align: center;
                      color: #1c1c1c;
                    "
                  >
                    <p style="margin: 0">
                      <a
                        href="https://we.team"
                        target="_blank"
                        style="text-decoration: underline; color: #1c1c1c"
                      >
                        We.Team
                      </a>
                      &nbsp;&nbsp;|&nbsp;&nbsp;
                      <a
                        href="https://we.team/en/product/app-download"
                        target="_blank"
                        style="text-decoration: underline; color: #1c1c1c"
                      >
                        ${msg("template.ourApp")}
                      </a>
                      &nbsp;&nbsp;|&nbsp;&nbsp;
                      <a
                        href="https://we.team/en/legal/terms-of-service"
                        target="_blank"
                        style="text-decoration: underline; color: #1c1c1c"
                      >
                        ${msg("template.terms")}
                      </a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    style="
                      padding: 20px;
                      text-align: left;
                      font-family: 'Lato', sans-serif;
                      font-size: 16px;
                      line-height: 24px;
                      text-align: center;
                      color: #9d9d9d;
                    "
                  >
                    <p style="margin: 0">
                      ${msg("template.toEnsureDelivery")}
                    </p>
                  </td>
                </tr>
              </table>
              <!--[if mso]>
                          </td>
                          </tr>
                          </table>
                          <![endif]-->
            </div>
          </td>
        </tr>
      </table>
      <!-- Full Bleed Background Section : END -->

      <!--[if mso | IE]>
      </td>
      </tr>
      </table>
      <![endif]-->
    </center>
  </body>
</html>
</#macro>