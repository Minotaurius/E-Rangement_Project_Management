const axios = require('axios').Router();

// const quoteEl = document.getElementById('placement');


  function makeGetRequest(path) {
    axios.get("https://zenquotes.io/api/quotes/").then(
        (response) => {
            var result = response.data;
            let i = Math.floor(Math.random() * result.length);
            console.log(result[i].h);
            return result[i].h
        },
        (error) => {
            console.log(error);
        }
    );
}
// makeGetRequest();

module.exports = makeGetRequest;