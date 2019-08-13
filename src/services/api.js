import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://landreg-s.herokuapp.com/',
  responseType: 'json'
});


/**
 * method to post data
 * @param endpoint
 * 
 * @return {object}
 * @return {error}
 */
const postData = (endpoint, data) => {
  return axiosInstance.post(endpoint, data).then((res) => {
    return {
      data: res.data,
      status: res.status
    }
  }).catch((err) => {
    return {
      err,
      errorMessage: 'Error occured'
    }
  })
}


export default postData;
