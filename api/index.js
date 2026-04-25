const { createServer } = require('node-xhttp');

// متغیرهای محیطی به صورت خودکار از Vercel Environment Variables خوانده می‌شوند
const PORT = process.env.PORT || 3000;
const UUID = process.env.UUID || null; // اگر خالی باشد، به صورت خودکار تولید می‌شود
const XPATH = process.env.XPATH || null; // مسیر دلخواه - اگر خالی باشد خودکار تولید می‌شود

// راه‌اندازی سرور XHTTP
const server = createServer({
  port: PORT,
  uuid: UUID,
  path: XPATH
});

server.start();

module.exports = server.handler;
