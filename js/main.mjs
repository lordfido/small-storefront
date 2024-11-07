import { supportedThemes } from './constants/supportedThemes.mjs';

const loadTheme = () => {
  // Obtiene los parámetros de búsqueda
  const rawQueryParams = location.search?.replace(/^\?/, '');

  // Si hay varios parámetros
  const queryParamsArr = rawQueryParams.includes('&')
    ? rawQueryParams.split('&') // los separa.
    : [rawQueryParams]; // si no, lo mete en un array

  // Convierte el array en un objeto
  const queryParams = queryParamsArr.reduce((aggr, curr) => {
    const [key, value] = curr.split('=');
    return {
      ...aggr,
      [key]: value
    };
  }, {});

  console.log('loadTheme: checking params', rawQueryParams, queryParams);

  // Si existe el parámetro `theme`, y está dentro de los temas que soportamos
  if (queryParams.theme && supportedThemes.includes(queryParams.theme)) {
    // Crea un nuevo elemento `link`
    const themeLink = document.createElement('link');
    themeLink.id = 'themeCss';
    themeLink.href = `./themes/${queryParams.theme}.css`;
    themeLink.rel = 'stylesheet';
    // Lo añade al HTML
    document.head.append(themeLink);
    // Sino, añade el tema por defecto
  }
};

const init = () => {
  loadTheme();
};

init();
