import request from 'superagent';
import camelcaseKeys from 'camelcase-keys'

export default request;

export const getRequest = (API, camelCase = true) => {
  return new Promise((resolve, reject) => {
    request
    .get(API)
    .then(response => {
      console.log('----- fetch successful ---- ', response);
      const formattedResponse = camelCase ? camelcaseKeys(response, {deep: true}): response;
      resolve(formattedResponse);
    }).catch(error => {
      console.log('----- fetch unsuccessful ---- ', error);
      reject(error);
    })
  })
}

export const postRequest = (API, payload, camelCase = true) => {
  return new Promise((resolve, reject) => {
    request
    .post(API)
    .send(payload)
    .then(response => {
      console.log('----- submit successful ---- ', response);
      const formattedResponse = camelCase ? camelcaseKeys(response, {deep: true}): response;
      resolve(formattedResponse);
    }).catch(error => {
      console.log('----- submit unsuccessful ---- ', error);
      reject(error);
    })
  })
}
