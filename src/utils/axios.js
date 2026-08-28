import axios from 'axios';

const VITE_APP_API_URL = 'http://localhost:8000/api/';


const defaultHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};


const axiosServices = axios.create({ baseURL: VITE_APP_API_URL || 'http://localhost:8000/api/',  headers: defaultHeaders });

// ==============================|| AXIOS - FOR MOCK SERVICES ||============================== //

axiosServices.interceptors.request.use(


  async (config) => {

    const authorizationToken =  localStorage.getItem('api-authorization');
    if (authorizationToken) {

      const parsedToken = JSON.parse(authorizationToken);
      config.headers['Authorization'] = `${parsedToken.token_type} ${parsedToken.access_token}`;

    }
    else{
      config.headers['Authorization'] =
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZTg2ODA5MjgzZTI4Yjk2ZDJkMzg1MzciLCJpYXQiOjE3NDM0MDMxMjEsImV4cCI6MTc0MzQ4OTUyMX0.hvqWYTc1NOylXAp0fA0LmRF6xlfeiCniIV5vjfGteg0';
    }
    
      return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosServices; 

export const fetcher = async (args) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosServices.get(VITE_APP_API_URL+url, { ...config });

  // console.log('API URL', VITE_APP_API_URL+url);
  // console.log('API RESPONSE', res.data);

  return res.data;
};

export const fetcherPost = async (args) => {
  const [url, config] = Array.isArray(args) ? args : [args];  
  const res = await axiosServices.post(VITE_APP_API_URL+url, { ...config }); 
  return res.data;
};

export const fetcherPut = async (args) => {
  const [url, config] = Array.isArray(args) ? args : [args];  
  const res = await axiosServices.put(VITE_APP_API_URL+url, { ...config }); 
  return res.data;
};

export const fetcherDelete = async (args) => {
  const [url, config] = Array.isArray(args) ? args : [args];  
  const res = await axiosServices.delete(VITE_APP_API_URL+url, { ...config }); 
  return res.data;
};
