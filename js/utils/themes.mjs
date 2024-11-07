import { supportedThemes } from "../constants/supportedThemes.mjs";
import { getQueryParams } from "./queryParams.mjs";

export const loadTheme = () => {
    const queryParams = getQueryParams();

    // Si existe el parámetro `theme`, y está dentro de los temas que soportamos
    if (queryParams.theme && supportedThemes.includes(queryParams.theme)) {
        // Crea un nuevo elemento `link`
        const themeLink = document.createElement("link");
        themeLink.id = "themeCss";
        themeLink.href = `./themes/${queryParams.theme}.css`;
        themeLink.rel = "stylesheet";
        // Lo añade al HTML
        document.head.append(themeLink);
    }
};
