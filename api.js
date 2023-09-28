import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api.thedogapi.com/v1/'
}

)