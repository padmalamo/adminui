// import axios from "axios";
// import { STORAGE } from "./localStorage.service";  
// import SERVER_API from "./ServerClientInterceptor";

// const CREATE = (url, body, headers) => {
//   // data is an object which will be parsed by axios and converted to query params
//   return SERVER_API({ method: "post", url: url, data: body, headers: headers });
// };

// const READ = (url, data, headers) => {
//   // data is an object which will be parsed by axios and converted to query params
//   return SERVER_API({
//     method: "get",
//     url: url,
//     params: data,
//     headers: headers
//   });
// };

// const UPDATE = (url, body, headers) => {
//   // data is an object which will be parsed by axios and converted to query params
//   return SERVER_API({ method: "put", url: url, data: body, headers: headers });
// };

// const DELETE = (url, headers) => {
//   // data is an object which will be parsed by axios and converted to query params
//   return SERVER_API({
//     method: "delete",
//     url: url,
//     headers: headers
//   });
// };
 

// export { READ, UPDATE, DELETE, CREATE };

import { dadAPI, stagingAPI } from "./ServerClientInterceptor";

const CREATE = (apiInstance, url, body, headers) => {
  return apiInstance({ method: "post", url: url, data: body, headers: headers });
};

const READ = (apiInstance, url, data, headers) => {
  return apiInstance({
    method: "get",
    url: url,
    params: data,
    headers: headers
  });
};

const UPDATE = (apiInstance, url, body, headers) => {
  return apiInstance({ method: "put", url: url, data: body, headers: headers });
};

const DELETE = (apiInstance, url, headers) => {
  return apiInstance({
    method: "delete",
    url: url,
    headers: headers
  });
};

export { READ, UPDATE, DELETE, CREATE };
