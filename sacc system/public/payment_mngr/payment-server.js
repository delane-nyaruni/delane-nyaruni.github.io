
/**
 *  advanced node server requests
 *  */
const http = require('http');
const url = require('url');
const fs = require('fs');
const lookup = require('mime-types').lookup;

const server = http.createServer((req,res) => {
    let parsedURL =url.parse(req,url, true);
    let path = parsedURL.path.replace(/^\/+|\/+$/g, "");

    if (path == "") {
        path = "index.html";
    }
    console.log(`Requested path ${path}`);

    let file = __dirname + "/public" + path;

    fs.readFile(file, (err, content) => {
        if (err) {
            console.log(`FileNot Found ${file}`);
            res.writeHead(404);
            res.end();
        } else{
            console.log(`Returning ${path}`);
            res.setHeader("X-Content-Type-Options", "nonsniff");
            let mime = lookup(path);
            res.writeHead(200, {"Content-type": mime});
            res.end(content);
        }
    });
});


server.listen(13401, "localhost", () => {
    console.log("Payment server started");
});
