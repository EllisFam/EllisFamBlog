// Previous Code


function getQuote() {
    let url = "https://cors-anywhere.herokuapp.com";
    url += "/inspiration.goprogram.ai";
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log('json: ' + json);
            const quote = json.quote;
            const author = json.author;
            document.getElementById("quote").innerHTML = "\"" + quote + "\"";
            document.getElementById("author").innerHTML = "-" + author;
        })
        .catch(function (reject) {
            const quote = "When you exceed the 'quote of the day' API call limits, gotta have a backup quote."
            const author = "The Ellis's";
            document.getElementById("quote").innerHTML = "\"" + quote + "\"";
            document.getElementById("author").innerHTML = "-" + author;
        });
};
