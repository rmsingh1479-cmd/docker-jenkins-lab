const http = require('http');

const server = http.createServer((req, res) => {
    res.write("Docker Image Built Using Jenkins");
    res.end();
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});