const http = require('http');
const fs = require('fs');

const sever = http.createServer((req, res) => {
    fs.readFile('./templates/index.html', (err, data) => {
        if(err){
            res.writeHead(404, {'Type-Context': 'text/html'});
            res.end('404 NOT FOUND');
        }
        res.writeHead(200, {'Type-Context' : 'text/html'});
        res.write(data);
    });
});

sever.listen(8080, 'localhost', ()=> {console.log('Sever is running')})