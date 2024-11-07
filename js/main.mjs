import { loadComponent } from './utils/components.mjs';
import { getQueryParams } from './utils/queryParams.mjs';
import { loadTheme } from './utils/themes.mjs';

const init = () => {
  const params = getQueryParams();
  loadTheme(params.theme);
  loadComponent('footer', '#footer');
};

init();
