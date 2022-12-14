import http from "http";

import * as dotenv from "dotenv";
dotenv.config();

import app from "./app";

const port = process.env.PORT;

const server = http.createServer(app).listen(port, () => {
  console.log(`Server started on port ${port}`);
});
