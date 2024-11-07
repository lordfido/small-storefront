import { getFlavourData } from '../constants/appFlavours.mjs';

/**
 * Carga los metadatos del cliente seleccionado
 * @param {string?} flavour Cliente seleccionado
 */
export const loadMetaData = (flavour) => {
  if (!flavour || flavour === 'default') {
    return;
  }

  // Obtiene los datos del cliente
  const data = getFlavourData(flavour);
  if (!data) {
    return;
  }

  // Actualiza el título
  document.getElementById('webTitle').innerHTML = data.title;

  // Actualiza la descripción
  document
    .getElementById('webDescription')
    .setAttribute('content', data.description);

  // TODO: Actualizar el icono
  // TODO: Actualizar el theme-color

  // Actualiza el tema de CSS
  const themeLink = document.createElement('link');
  themeLink.id = 'themeCss';
  themeLink.href = `./themes/${flavour}.css`;
  themeLink.rel = 'stylesheet';
  document.head.append(themeLink);
};
