import axios from 'axios';
import {Platform} from 'react-native';
import Config from 'react-native-config';
import store from '@redux/store';

// axios.defaults.baseURL = Config.API_SERVER_URL;
axios.defaults.baseURL =
  Platform.OS === 'ios'
    ? Config.API_STAGING_SERVER_URL
    : 'http://10.0.2.2:5000/';

const getDataBody = config => {
  let data = '';
  if (
    config.data &&
    config.headers['Content-Type'] === 'application/x-www-form-urlencoded'
  ) {
    for (const key in config.data) {
      data = data + `${key}=${config.data[key]}&`;
    }
    data = data.slice(0, data.length - 1);
  } else {
    data = config.data;
  }

  return data;
};

//TODO: REQUEST
axios.interceptors.request.use(
  config => {
    const data = getDataBody(config);
    if (__DEV__) {
      console.log(
        '%c [HTTP Interceptor Request]',
        'color: blue; font-weight: bold',
        config,
      );
    }

    return {...config, data};
  },
  error => {
    return Promise.reject(error);
  },
);

//TODO: RESPONSE
axios.interceptors.response.use(
  response => {
    if (__DEV__) {
      console.log(
        '%c [HTTP Interceptor Response]',
        'color: green; font-weight: bold',
        response,
      );
    }

    return response;
  },
  error => {
    if (__DEV__) {
      console.log(
        '%c [HTTP Interceptor Response Error]',
        'color: red; font-weight: bold',
        error?.response,
      );
    }

    return Promise.reject(error);
  },
);

export default class HttpService {
  static generateHeader(headers) {
    const token = store.getState().token.data;
    let options = {
      'Content-Type': headers || 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    };
    if (token !== null) {
      options = {
        ...options,
        Authorization: `Bearer ${token}`,
      };
    }

    return options;
  }

  //TODO: GET
  static async get(url, params) {
    try {
      return await axios
        .get(url, {
          headers: {
            get: this.generateHeader(),
          },
          params: params,
        })
        .then(response => response.data);
    } catch (error) {
      throw error.response;
    }
  }

  //TODO: POST
  static async post(url, body, params) {
    try {
      return await axios
        .post(url, body, {
          headers: {
            post: this.generateHeader(),
          },
          params: params,
        })
        .then(response => response.data);
    } catch (error) {
      throw error.response;
    }
  }

  //TODO: FORM_DATA
  static async postFormData(url, formData) {
    try {
      return await axios
        .post(url, formData, {
          headers: {
            post: this.generateHeader('form-data'),
          },
        })
        .then(response => response.data);
    } catch (error) {
      throw error.response;
    }
  }

  //TODO: PUT
  static async put(url, data) {
    try {
      return await axios
        .put(url, data, {
          headers: this.generateHeader(),
        })
        .then(response => response.data);
    } catch (error) {
      throw error.response;
    }
  }

  //TODO: PATCH
  static async patch(url, data) {
    try {
      return await axios
        .patch(url, data, {
          headers: this.generateHeader(),
        })
        .then(response => response.data);
    } catch (error) {
      throw error.response;
    }
  }

  //TODO: DELETE
  static async delete(url) {
    try {
      return await axios
        .delete(url, {
          headers: this.generateHeader(),
        })
        .then(response => response.data);
    } catch (error) {
      throw error.response;
    }
  }
}
