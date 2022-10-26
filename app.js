const users = [
  {
    id: 1,
    name: "Rebekah Johnson",
    email: "Glover12345@gmail.com",
    password: "123qwe",
  },
  {
    id: 2,
    name: "Fabian Predovic",
    email: "Connell29@gmail.com",
    password: "password",
  },
];
const posts = [
  {
    id: 1,
    title: "간단한 HTTP API 개발 시작!",
    content: "Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현.",
    userId: 1,
  },
  {
    id: 2,
    title: "HTTP의 특성",
    content: "Request/Response와 Stateless!!",
    userId: 1,
  },
];

const http = require("http");
const server = http.createServer();

const reqListener = (req, res) => {
  const { method, body } = req;
  console.log(body);
  if (method === "POST") {
    users.push(body);
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "userCreated" }));
  }
};

server.on("request", reqListener);

const PORT = 8002;
const IP = "127.0.0.1";
server.listen(PORT, IP, function () {
  console.log("되는중");
});
