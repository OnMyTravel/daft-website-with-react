import APIClient from './APIClient';
import HttpClient from './HttpClient'

export default new APIClient({ httpClient: new HttpClient({ baseUrl: 'http://localhost:3001' }) });