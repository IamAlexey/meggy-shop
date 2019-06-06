import { environment } from '../environments/environment';

export const BASE_URL = environment.serverUrl;
export const PREFIX_API = `${BASE_URL}api`;

export const CATALOG = `${PREFIX_API}/catalog`;
export const PRODUCT_BY_ID = `${CATALOG}/`;
