const http = require("http");
const fs = require("fs");
// function rqListener(req, res) {

// }
// http.createServer(rqListener);

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      '<html><body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body ></html >'
    );
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    fs.writeFileSync("message.txt", "DUMMY");
    //   res.writeHead(302, {})
    res.statusCode = 302;
    res.setHeader = ("Location", "/");
    res.end();
  }
  console.log(req.url, req.method, req.headers);
  // process.exit();
  res.setHeader("Content-Type", "text/html");
  res.write("<html><body>hi</body></html>");
  res.end();
});

server.listen(3000);
