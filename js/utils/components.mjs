const getStyles = async (component) => {
    try {
        const sty = await fetch(`./components/${component}.css`);
        const stylesStr = await sty.text();
        const styles = document.createElement("style");
        styles.innerHTML = stylesStr;
        return styles;
    } catch {
        console.error(`No se pudo cargar el CSS de <${component}>`);
        return undefined;
    }
};

const getHtml = async (component) => {
    try {
        const res = await fetch(`./components/${component}.html`);
        const html = await res.text();
        return html;
    } catch {
        console.error(`No se pudo cargar el HTML de <${component}>`);
        return undefined;
    }
};

const getJavascript = async (component) => {
    try {
        // Generate a `script` tag for the component
        const scrpt = document.createElement("script");
        scrpt.lang = "javascript";
        scrpt.src = `./components/${component}.mjs`;
        scrpt.type = "module";
        return scrpt;
    } catch {
        console.error(`No se pudo cargar el JS de <${component}>`);
        return undefined;
    }
};

/**
 * Descarga el HTML de un componente y lo carga en el elemento seleccionado *
 * @param {string} component Nombre del componente
 * @param {string} selector Selector CSS del padre donde quieres cargar el componente
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
        const [css, html, js] = await Promise.all([getStyles(component), getHtml(component), getJavascript(component)]);

        if (css) {
            wrapper.append(css);
        }

        if (html) {
            // Add the content to the `DOM`
            wrapper.innerHTML += html;
        }

        if (js) {
            // Add the `script` tag to the `DOM`
            wrapper.append(js);
        }
    } catch (err) {
        console.error(`No se pudo cargar el componente <${component}>`, err);
    }
};
