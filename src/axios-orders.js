import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://react-my-burger-dbd2c-default-rtdb.firebaseio.com/'
});

export default instance;