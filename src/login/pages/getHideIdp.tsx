export const getHideIdp = () => {
    try {
        /**
         * Always use query param if available
         */
        const searchParams = new URL(window.location.href).searchParams;

        if (searchParams.has("hideIdp")) {
            const hideIdp = searchParams.get("hideIdp");
            sessionStorage.setItem("hideIdp", hideIdp ?? "");
            return hideIdp === "true";
        }

        /**
         * Fall back to session storage
         */
        return sessionStorage.getItem("hideIdp") === "true";
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (ex) {
        return null;
    }
};
