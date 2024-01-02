fetch('https://ok.surf/api/v1/cors/news-feed').then((res) => { //from the API example
    if (!res.ok) {
    throw Error('could not fetch data for that resource');
    }
    return res.json();
}).then((data) => {
console.log(data);
}).catch((err) => {
console.log(err);
});