// import axios from "axios";
// import { STORAGE } from "./localStorage.service";
// import { LOGOUT } from "./auth.service";
// import { HTTP_CODES } from "app/constants/app-constant"; 
//  import { HTTP_CODES } from "../../constants/app-constant";
// const SERVER_API = axios.create({
//   baseDadURL: 'https://dad-api.indifi.com',
//   baseStagingURL:'https://stg-admin-api.indifi.com',
//   timeout: 50000, // 5 seconds
//   responseType: "json",
//   responseEncoding: "utf-8",
//   validateStatus: (status) => {
//     // `validateStatus` defines whether to resolve or reject the promise for a given
//     // HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
//     // or `undefined`), the promise will be resolved; otherwise, the promise will be
//     // rejected.
//     return status >= 200 && status < 511; // default
//   }
// });

// // Add a request interceptor
// SERVER_API.interceptors.request.use(
//   function (config) {
//     if (config.headers && config.headers.tokenAuthorization) {
//       // const token = STORAGE.get("admin_ui_token");
//       const token = '3791a3f09addecf964966d26c4b49c5fc607b600';
//       // axios.defaults.headers.common['Authorization']
//       config.headers.Authorization = `Bearer ${token}`;

//       delete config.headers.tokenAuthorization;
//     }

//     if (config.headers && config.headers.serverAuthorization) {
//       config.headers.token = config.headers.serverToken;
//       delete config.headers.authorization;
//     }
 
//     // Do something before request is sent
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor
// SERVER_API.interceptors.response.use(
//   (response) => {
//     const status = response?.status;
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data 
//     if (status>=400) {  
//        const error={response:response};
//         return Promise.reject(error); 
//     } else {
//       return response;
//     }
//   },
//   (error) => {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return handleError(error);
//   }
// );

// const handleError = async (error) => {
//   const status = error?.response?.status;
//   // was triggering logout fn 
//   if (status === HTTP_CODES.UNAUTHORIZED) {
//     // await callLogout();
//   }
//   return Promise.reject(error);
// };

// // const callLogout = async () => {
// //   await LOGOUT();
// //   STORAGE.set("token", ""); 
// //   window.location.href = window.location.origin + "/login";
// // };

// export default SERVER_API;  

// import axios from "axios";

import axios from "axios";
import { HTTP_CODES } from "../../constants/app-constant";

const createAPIInstance = (baseURL) => {
  return axios.create({
    baseURL: baseURL,
    timeout: 50000,
    responseType: "json",
    responseEncoding: "utf-8",
    validateStatus: (status) => {
      return status >= 200 && status < 511;
    }
  });
};

const dadAPI = createAPIInstance('https://dad-api.indifi.com');
const stagingAPI = createAPIInstance('https://stg-admin-api.indifi.com');

const addInterceptors = (apiInstance) => {
  apiInstance.interceptors.request.use(
    function (config) {
      const token = '53b4081bc4d365ff5c723266e2b062fdb215bed5';
      config.headers.Authorization = `Bearer ${token}`;
      
      if (config.headers.tokenAuthorization) {
        delete config.headers.tokenAuthorization;
      }
      if (config.headers.serverAuthorization) {
        config.headers.token = config.headers.serverToken;
        delete config.headers.serverAuthorization;
      }
      
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  
  apiInstance.interceptors.response.use(
    (response) => {
      if (response.status >= 400) {
        const error = { response: response };
        return Promise.reject(error);
      } else {
        return response;
      }
    },
    (error) => {
      return handleError(error);
    }
  );
};

const handleError = async (error) => {
  const status = error?.response?.status;
  if (status === HTTP_CODES.UNAUTHORIZED) {
    // await callLogout();
  }
  return Promise.reject(error);
};

addInterceptors(dadAPI);
addInterceptors(stagingAPI);

export { dadAPI, stagingAPI };
