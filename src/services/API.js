import APIClient from './APIClient';
import HttpClient from './HttpClient'

console.log(process.env.REACT_APP_API_URL);
export default new APIClient({
  httpClient: new HttpClient({ baseUrl: process.env.REACT_APP_API_URL })
});