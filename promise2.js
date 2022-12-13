let axios = require('axios'); // lấy thư viện vào máy

function getData() {
    return new Promise((resolve, reject) => {
            axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').then((data) => {
                    resolve(data)
                }
            )
        }
    )
}
// async - await
async function show() {
    let data = await getData();
    console.log(data.data)
}


show();

// promise
// getData().then((data) => {
//     console.log(data.data)}
// )