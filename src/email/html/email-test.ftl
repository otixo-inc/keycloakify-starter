<#--
  WARNING: Before modifying this file, run the following command:
  
  $ npx keycloakify own --path "email/html/email-test.ftl"
  
  This file is provided by @keycloakify/email-native version 260007.0.0.
  It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
-->
<#import "template.ftl" as layout>
<@layout.emailLayout>
<p style="margin: 0px 0px 20px 0px;">
  ${kcSanitize(msg("emailTestBodyHtml",realmName))?no_esc}
</p>
</@layout.emailLayout>