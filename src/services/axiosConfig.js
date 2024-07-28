import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:4444',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        Promise.reject(error);
    },
);

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response) {
            // eslint-disable-next-line no-console
            console.error('Server Error:', error.response.data);
        } else if (error.request) {
            // eslint-disable-next-line no-console
            console.error('Network Error:', error.message);
        } else {
            // eslint-disable-next-line no-console
            console.error('Error:', error.message);
        }
        return Promise.reject(error);
    },
);

export default instance;
