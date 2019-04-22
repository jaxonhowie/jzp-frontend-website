import http from './public';

export const getApiList = (that, params) => {
  return http.fetchGet('/steam/get/apis', that, params);
};
