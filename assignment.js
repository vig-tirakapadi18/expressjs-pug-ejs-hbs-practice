const http = require('http');

const reqListener = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
    <html>
      <title>Home Page</title>
      <body>
        <h1>Welcome to My World!</h1>
        <form action="/create-user" method="POST">
          <input type="text" name="username">
          <button type='sumbit'>Send</button>
        </form>
      </body>
    </html>
    `);
    return res.end();
  }

  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
    <html>
      <title>Home Page</title>
      <body>
        <ul>
          <li>User 1</li>
        <ul>
      </body>
    </html>
    `);
    return res.end();
  }

  if (url === '/create-user' && method === 'POST') {
    const body = [];

    req.on('data', (chunk) => {
      body.push(chunk);
    })

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split('=')[0]);
    })

    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
  }
};

const server = http.createServer(reqListener);

server.listen(3456);