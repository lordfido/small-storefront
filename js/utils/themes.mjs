import { supportedThemes } from '../constants/supportedThemes.mjs';

/**
 * Recibe un tema y carga sus valores en caso de que sea un tema válido
 * @param {string?} theme Tema seleccionado
 */
export const loadTheme = (theme) => {
  // Si existe el parámetro `theme`, y está dentro de los temas que soportamos
  if (theme && supportedThemes.includes(theme)) {
    // Crea un nuevo elemento `link`
    const themeLink = document.createElement('link');
    themeLink.id = 'themeCss';
    themeLink.href = `./themes/${theme}.css`;
    themeLink.rel = 'stylesheet';

    // Lo añade al `DOM`
    document.head.append(themeLink);
  }
};
