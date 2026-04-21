# Sử dụng bản node nhẹ để tiết kiệm dung lượng
FROM node:18-alpine

# Tạo thư mục làm việc trong container
WORKDIR /usr/src/app

# Copy file quản lý thư viện vào trước
COPY package*.json ./

# Cài đặt thư viện
RUN npm install

# Copy toàn bộ code vào container
COPY . .

# App chạy port 3000 nên mình mở port 3000
EXPOSE 3000

# Lệnh để chạy app
CMD ["node", "app.js"]