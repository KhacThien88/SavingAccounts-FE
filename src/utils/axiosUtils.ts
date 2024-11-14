import axios from "axios";
const axiosUtils = axios.create({
	baseURL: "https://www.devkhacthien.somee.com/api",
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
	},
});
axiosUtils.interceptors.response.use(
	(response) => response,
	(error) => {
		// Xử lý lỗi
		return Promise.reject(error);
	},
);

export default axiosUtils;
