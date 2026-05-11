import apiClient from '../../helpers/api-client'


// Test Suit cho Heath Check
describe('Heath check, API còn sống không?', () => {
    // Service sống
    it('Server phải phản hồi', async () => {
        const res = await apiClient.get('/posts/1')
        expect(res.status).toBe(200)
    })
    // Trả kết quả chính xác
    it('Response phải là JSON', async () => {
        const res = await apiClient.get('/posts/1')
        expect(typeof res.data).toBe('object')
    })
})

// CRUD example từng module ở đây
describe('User API', () => {
    // Read 
    // Create
    // Update
    // Delete
})
