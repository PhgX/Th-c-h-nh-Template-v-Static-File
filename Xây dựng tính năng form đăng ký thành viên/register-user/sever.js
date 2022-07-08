const http = require('http');
const fs = require('fs');
const qs = require('qs');

const sever = http.createServer((req, res) => {
   if(req.method === 'GET'){
    fs.readFile('./views/register.html', (err, data) => {
        if(err){
            res.writeHead(404, {'Type-context': 'text/html'});
            res.end('404 File not found');
        }
        res.writeHead(200, {'Type-Context': 'text/html'});
        res.write(data);
        return res.end();
    });
   } else {
    let data = '';
    req.on('data', chunk => {data += chunk
        console.log(data);
    });
    req.on('end', () => {
        let result = qs.parse(data);
        console.log(result);
        console.log(data);
        return res.end('Register Success!!!');
    });
    req.on('error', ()=> console.log(error));
   }
})

sever.listen(8080, 'localhost', ()=> console.log('Sever is running at localhost:8080'));

