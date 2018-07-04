import realApi from './realAccountApi';
import mockApi from './mockAccountApi';
import config from '../config/config';

let api = realApi;
if(config.useMockApi)
  api = mockApi;

export default api;
