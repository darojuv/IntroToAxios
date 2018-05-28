import axios from 'axios';

const instanceAxios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});
instanceAxios.defaults.headers['Authentication'] = 'AUTH CODE FROM INSTANCE';
export default instanceAxios;