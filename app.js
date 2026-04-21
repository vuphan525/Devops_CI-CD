const express = require('express');
const app = express();
const port = 3000;

// Route chính
app.get('/', (req, res) => {
  console.log(`[LOG] ${new Date().toLocaleString()}: Có người vừa ghé thăm web!`);
  res.send('<h1>Chào mừng bạn đến với Hệ Thống DevOps Demo!</h1><p>Hệ thống đang chạy ổn định.</p>');
});

// Route giả lập lỗi để test sau này
app.get('/error', (req, res) => {
  console.error("!!! LỖI GIẢ LẬP XẢY RA !!!");
  res.status(500).send("Opps! Có lỗi gì đó rồi.");
});

app.listen(port, () => {
  console.log(`App đang chạy tại http://localhost:${port}`);
});