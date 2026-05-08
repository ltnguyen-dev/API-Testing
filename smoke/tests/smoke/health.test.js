// Test đơn giản nhất: API có đang chạy không?
const dayjs = require('dayjs')
const apiClient = require('../helpers/api-client');

describe('Health Check — Kiểm tra API còn sống', () => {
    it('API phải trả về status 200', async () => {
        // JSONPlaceholder là public API miễn phí để test
        const response = await apiClient.get('/posts/1');

        expect(response.status).toBe(200);
    });

    it('Response phải là JSON hợp lệ', async () => {
        const response = await apiClient.get('/posts/1');

        // Kiểm tra response có body không
        expect(response.data).toBeDefined();
        // Kiểm tra đúng là object, không phải string hay số
        expect(typeof response.data).toBe('object');
    });

    it('Response in 3 seconds', async () => {
        const startIn = dayjs()
        const response = await apiClient.get('/posts/1');
        const finishIn = dayjs()

        const totalIn = finishIn.diff(startIn)

        // Thời gian phản hồi <= 3s
        console.log('Thời gian phản hồi là ', totalIn);

        expect(totalIn).toBeLessThanOrEqual(3000)
    })
});