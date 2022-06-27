import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4N9OK0j4XUVlqj9yoUwYHuy6QvOKdC5yNFIn_3NDr3Y'
    }
});