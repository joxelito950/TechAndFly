import 'whatwg-fetch';

const success = resp => resp.status >= 200 && resp.status < 300;

function getErrorMsg(resp) {
  return resp.headers.has('errorMsg')
    ? resp.headers.get('errorMsg')
    : 'Error no controlado, por favor contacte con el administrador';
}

export default {
  status: resp =>
    success(resp)
      ? Promise.resolve(resp)
      : Promise.reject(new Error(getErrorMsg(resp))),

  json: response => response.json(),

  headers: () => {
    return {};
  }
};
