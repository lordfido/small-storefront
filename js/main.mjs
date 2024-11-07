import { loadComponent } from './utils/components.mjs';
import { loadMetaData } from './utils/metadata.mjs';
import { getQueryParams } from './utils/queryParams.mjs';

const init = () => {
  const params = getQueryParams();

  loadMetaData(params.flavour);
  loadComponent('footer', '#footer');
};

init();
