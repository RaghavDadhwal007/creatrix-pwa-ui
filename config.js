// const serverCred = () => {
//     if (typeof window !== 'undefined') {
//         return window.creatigoConfig || false;
//     }
//     return false;
// };

const isDev = process.env.NODE_ENV !== 'production';
const platform = 'web';

export const APP_URL = isDev ? 'http://localhost:3000' : '';

const config = {
    // API_BASE_URL: serverCred() ? serverCred()?.REACT_APP_CREATIGO_API_BASE_URL : process.env.API_BASE_URL,
    // IMAGE_BASE_URL: serverCred() ? serverCred()?.REACT_APP_CREATIGO_IMAGE_BASE_URL : process.env.IMAGE_BASE_URL,
    API_BASE_URL: process.env.API_BASE_URL || 'http://ubs64-ssd-dev1.destm.com/creatigo',
    GQL_BASE_URL: process.env.GQL_BASE_URL || 'http://ubs64-ssd-dev1.destm.com/creatigo/graphql',
    IMAGE_BASE_URL: process.env.IMAGE_BASE_URL || 'https://cdn3.destm.com/destm_com/creatigo',
    UPLOAD_IMAGE_BASE_URL: process.env.UPLOAD_IMAGE_BASE_URL || 'https://cdn-uploader.destm.com',
    PAYU_BASE_URL: process.env.API_BASE_URL || 'http://ubs64-ssd-dev1.destm.com',
    platform,
    environment: process.env.NODE_ENV,
};

export default config;
