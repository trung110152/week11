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

const http = require('http');
const server = http.createServer((req, res) => {
    res.write('<h1> Hello world </h1><hr>');
    res.end();
});
server.listen(8080, 'localhost');

