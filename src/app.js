const http = require("http");
const getUsers = require("./modules/users");
const { URL } = require("url");

const server = http.createServer((request, response) => {
  const ipAddress = "http://127.0.0.1";
  const url = new URL(request.url, ipAddress);
  const helloValue = url.searchParams.get("hello");

  if (helloValue) {
    response.status = 200;
    response.statusMessage = "Ok";
    response.header = "Content-Type: text";
    response.write(`hello, ${helloValue}`);
    response.end();
  }

  if (request.url === "/users") {
    response.status = 200;
    response.statusMessage = "Ok";
    response.header = "Content-Type: aplication/json";
    response.write(getUsers());
    response.end();

    return;
  }

  if (request.url === "/?hello") {
    response.statusCode = 400;
    response.statusMessage = "Bad Request";
    response.header("Content-Type: text");
    response.write("Enter a name");
    response.end();
    return;
  }

  if (request.url === "/") {
    response.status = 200;
    response.statusMessage = "Ok";
    response.header = "Content-Type: text";
    response.write("Hello, world!");
    response.end();
    return;
  }

  response.status = 500;
  response.statusMessage = "Ok";
  response.header = "Content-Type: text";
  response.write(" ");
  response.end();
});

server.listen(3003, () => {
  console.log("Сервер запущен по адресу http://127.0.0.1:3003");
});
