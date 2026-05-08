require('dotenv').config();
const axios = require('axios');

// Tạo instance axios với cấu hình mặc định
const apiClient = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: parseInt(process.env.REQUEST_TIMEOUT) || 5000,
    headers: {
        'Content-Type': 'application/json',
        // Thêm token nếu có
        ...(process.env.API_TOKEN && {
            Authorization: `Bearer ${process.env.API_TOKEN}`,
        }),
    },
});

// Interceptor để log lỗi rõ ràng hơn
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        // Không throw, trả về error response để test có thể kiểm tra
        return Promise.resolve(error.response || { status: 0 });
    }
);

module.exports = apiClient;