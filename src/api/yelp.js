import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
      Authorization: 'Bearer Jw0oIMgpId1HV8x-mogAapr36SVRDSAM00qOEvAmLyxCaOV1I0T6kzJbSvazjA6Q7sNS46uHfHzRzLLAESkHYv3ES50h-sUQwtwvh836OsN-D5UwO6ObMswyxDM6YXYx'
    }
  });
  
  // Add a request interceptor
  api.interceptors.request.use(
    function (config) {
      // Log the request details
      console.log('Request:', config.url);
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  
  // Add a response interceptor
  api.interceptors.response.use(
    function (response) {
      // Log the response details
      console.log('Response:', response.data);
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  
  export default api;