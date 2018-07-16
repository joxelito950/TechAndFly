import common from './common';
import ref from './references';

export default {
  getRepoByUsername: username =>
    fetch(ref.repoByUsername(username), {
      method: 'GET',
      mode: 'cors',
      headers: Object.assign(common.headers(), {
        'Content-Type': 'application/json'
      })
    }).then(common.status)
      .then(r => r.json())
};
