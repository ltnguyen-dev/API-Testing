module.exports = {
  // Chỉ chạy file trong thư mục tests/smoke/
  testMatch: ['**/tests/smoke/**/*.test.js'],
  // Timeout cho mỗi test case (10 giây)
  testTimeout: 10000,
  // Hiển thị kết quả chi tiết
  verbose: true,
};