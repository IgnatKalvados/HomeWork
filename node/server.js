const http = require('http');

const server = http.createServer(function(req, res){
    res.writeHead( 200, {'Content-Type': 'text/html'});
    res.end(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>node server</title>
</head>
<body>
    <h1>Hello World!</h1>
</body>
</html>`
    );
});

server.listen(3000, '127.0.0.1');
console.log('Node is working')