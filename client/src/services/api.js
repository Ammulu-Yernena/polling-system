import axios from 'axios';

const host = 'http://localhost:4000/api'

export const setToken = (token )=> {
    if(token){
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }else{
        delete axios.defaults.headers.common['Authorizatiion'];
    }
};

export const call = async(method, path, data) => {
    try {
        console.log(`Making ${method.toUpperCase()} request to ${host}/${path} with data:`, data);
        const response = await axios[method](`${host}/${path}`, data);
        console.log('Response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error making request:', error.response || error.message);
        throw error;
    }
}

export default {setToken, call};
