import axios from 'axios';


export default axios.create ({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:'Client-ID aAgbGGeE83yhYAOESuutcKa7Gp7tgVeRqfBL19Bp91E'
    }
});