import realApi from './realHotelApi';
import mockApi from './mockHotelApi';
import config from '../config/config';

let api = realApi;
if(config.useMockApi)
  api = mockApi;

export default api;
