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
  {
    userID: 3,
    userName: "new user 1",
    postingId: 3,
    postingImageUrl: "내용 1",
    postingContent: "sampleContent3",
  },
  {
    userID: 4,
    userName: "new user 2",
    postingId: 4,
    postingImageUrl: "내용 2",
    postingContent: "sampleContent4",
  },
];

const http = require("http");
const server = http.createServer();

const reqListener = (req, res) => {
  const { url, method } = req;
  if (method === "POST") {
    if (url === "/users/signup") {
      let body = "";

      req.on("data", (data) => {
        body += data;
      });

      req.on("end", () => {
        const user = JSON.parse(body);

        users.push({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
        });
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "userCreated" }));
      });
    } else if (url === "/posts/upload") {
      let body = "";

      req.on("data", (data) => {
        body += data;
      });

      req.on("end", () => {
        const post = JSON.parse(body);

        posts.push({
          id: post.id,
          title: post.title,
          content: post.content,
          userId: post.userId,
        });
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "postCreated" }));
      });
    }
  }
  if (method === "GET") {
    if (url === "/posts/get") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ data: posts }));
    }
  }
};

server.on("request", reqListener);

const PORT = 8002;
const IP = "127.0.0.1";
server.listen(PORT, IP, function () {
  console.log("되는중");
});
