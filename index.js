import express from 'express';
import cors from "cors";
import dbConnection from "./src/Middleaware/db.js";
import loggerMiddleware from "./src/Middleaware/log.js";
// import router from './src/Router/index.js';
import router from "./src/Router/index.js";
const app = express();
// 连接数据库
await dbConnection();
// 跨域处理
app.use(cors());
// 日志中间件
app.use(loggerMiddleware);
app.use(express.json());

app.use('/api', router);

const port = 9999;
app.listen(port, () => {
  console.log(`app is running in http://localhost:${port}`);
});
