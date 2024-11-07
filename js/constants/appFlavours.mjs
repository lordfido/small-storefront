/**
 * @typedef Flavour
 * @property {string} title El nombre de la empresa
 * @property {string} subtitle El eslógan de la empresa
 * @property {string} description Pequeña descripción de la empresa
 */

/**
 * @type {Flavour}
 */
const defaultFlavour = {
  title: 'Pequeño escaparate',
  subtitle: 'Encuentra lo que necesitas',
  description: 'Ésta es una web multi-propósito para pequeñas empresas'
};

const flavours = {
  default: defaultFlavour
};

/**
 * Devuelve los parámetros específicos para el cliente seleccionado
 * @param {string} flavour Cliente para personalizar
 * @returns {Flavour}
 */
export const getFlavourData = (flavour = 'default') =>
  flavours[flavour] ?? flavours.default;
