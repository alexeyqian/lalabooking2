import realApi from './realPostApi';
import mockApi from './mockPostApi';
import config from '../config/config';

let api = realApi;
if(config.useMockApi)
  api = mockApi;

export default api;
