import axios from 'axios';

const VITE_APP_API_URL = 'http://localhost:8000/api/';


const defaultHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};


const axiosServices = axios.create({ baseURL: VITE_APP_API_URL || 'http://localhost:8000/api/',  headers: defaultHeaders });

// ==============================|| AXIOS - FOR MOCK SERVICES ||============================== //

export default axiosServices;

export const fetcher = async (args) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosServices.get(VITE_APP_API_URL+url, { ...config });

  return res.data;
};

export const fetcherPost = async (args, defaultHeader = null) => {
  const [url, config] = Array.isArray(args) ? args : [args];
  let PostHeaders = {};

  if(defaultHeader){
     
    PostHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `${defaultHeader.token_type} ${defaultHeader.access_token}`
    };
  }

  const res = await axiosServices.post(VITE_APP_API_URL+url, { ...config }, { headers: defaultHeader ? PostHeaders : defaultHeaders });
 

  console.log('POST Request to:', res);

  return res.data;
};
