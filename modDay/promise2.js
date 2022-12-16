// let axios = require('axios');
//
// async function run() {
//     let list = [];
//     await axios.get('https://jsonplaceholder.typicode.com/users/1').then((res) => {
//         list.push(res.data)
//     })
//     await axios.get('https://jsonplaceholder.typicode.com/users/2').then((res) => {
//         list.push(res.data)
//     })
//     await axios.get('https://jsonplaceholder.typicode.com/users/3').then((res) => {
//         list.push(res.data)
//     })
//     console.log(list.filter(item => item.name.includes("le")))
//
//
// }
//
// run().then();
// async - await
// async function show() {
//     let data = await getData();
//     console.log(getData())
// }
//
//
// show();

// promise
// getData().then((data) => {
//     console.log(data.data)}
// )



// const http = require('http');
//
// http.createServer(function (req, res) {
//     let txt = ""
//     if(req.url === "/login") {
//         txt = "Lonin success";
//     } else {
//         txt = "Login fail";
//     }
//     res.end(txt);
// }).listen(8080, "localhost");


const http = require('http');
const fs = require('fs');
const qs = require('qs')

const server = http.createServer(function (req, res) {
    if (req.method === 'GET') {
        fs.readFile('register.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    } else {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        })
        req.on('end', () => {
            const userInfo = qs.parse(data);
            fs.readFile('info.html', 'utf8', function (err, datahtml) {
                if (err) {
                    console.log(err);
                }
                datahtml = datahtml.replace('{name}', userInfo.name);
                datahtml = datahtml.replace('{email}', userInfo.email);
                datahtml = datahtml.replace('{password}', userInfo.password);
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(datahtml);
                return res.end();
            });
        })
        req.on('error', () => {
            console.log('error')
        })
    }
});

server.listen(8080, function () {
    console.log('server running at localhost:8080 ')
});