const fs = require('fs');
const http = require('http');

const sever = http.createServer((req, res) => {
    fs.readFile('./templates/index.html', 'utf8', (err, data) => {
        if(err) {
            res.writeHead(404, {'Type-Context': 'text/html'});
            return res.end('404 File not found')
        }

        let total = 3;
        data = data.replace('{result}', total)

        res.writeHead(200, {'Type-context' : 'text/html'});
        res.write(data);
        return res.end();
    })
})

sever.listen(8080, 'localhost', ()=>{console.log('Sever is running in localhost:8080')});