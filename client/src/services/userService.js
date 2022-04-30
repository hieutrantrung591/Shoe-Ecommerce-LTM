import axios from 'axios';

const handleLoginApi = (email, password) => {
    return axios.post('account/login', { email, password });
}

export { handleLoginApi };