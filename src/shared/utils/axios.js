import axios from 'axios';
    
//const baseURL = 'http://localhost:3000';
const baseURL = process.env.REACT_APP_SERVER_URL

const axios = axios.create({
    baseURL,
});

axios.interceptors.request.use(
	function (req) {
		return req;
	},
	function (error) {
		return error;
	}
);

axios.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		return error;
	}
);

export default axios;
