const db = require("./db");
const server = require("./server");

module.exports = () => {
  db();
  server();
};
