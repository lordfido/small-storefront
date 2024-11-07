import { debug } from '../constants/featureFlags.mjs';

/**
 * Muestra elementos en la consola de desarrollo
 * @param  {...any} args Elementos que mostrar en la consola
 */
export const log = (...args) => {
  if (debug) {
    console.log(...args);
  }
};
