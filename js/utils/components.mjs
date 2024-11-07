/**
 * Descarga el HTML de un componente y lo carga en el elemento seleccionado *
 * @param {string} component Nombre del componente
 * @param {string} selector Selector CSS del padroe donde quieres cargar el componente
 * @returns {Promise<void>}
 */
export const loadComponent = async (component, selector) => {
  /**
   * @type {HTMLElement?}
   */
  const wrapper = document.querySelector(selector);
  if (!wrapper) {
    return;
  }

  try {
    // Download the HTML content
    const res = await fetch(`./components/${component}.html`);
    const html = await res.text();

    // Add the content to the `DOM`
    wrapper.innerHTML = html;

    // Generate a `script` tag for the component
    const scrpt = document.createElement('script');
    scrpt.lang = 'javascript';
    scrpt.src = `./components/${component}.mjs`;
    scrpt.type = 'module';

    // Add the `script` tag to the `DOM`
    wrapper.append(scrpt);
  } catch (err) {
    console.error(`No se pudo cargar el componente <${component}>`);
  }
};
