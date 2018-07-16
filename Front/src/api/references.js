import consts from '../constants';

export default {
  repoByUsername: username => `${consts.REMOTE_API}/users/${username}/repos`
};
