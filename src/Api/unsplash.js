import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID 224e2fd5f8cdad24761a0c1cab6668b92e2b09f6ff9ac215a0cc4108a5965059',
    },
});
