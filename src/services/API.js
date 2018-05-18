import request from 'request-promise-native'

const BASE_URL_API = 'http://localhost:3001'

const post = (path, body) => {
  const options = {
    method: 'POST',
    uri: `${BASE_URL_API}${path}`,
    body,
    json: true
  }

  return request(options);
}

export default {
  post
}