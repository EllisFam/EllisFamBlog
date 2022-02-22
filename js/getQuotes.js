const url = "https://inspiration.goprogram.ai";
fetch(url)
    .then(function (response) {
        return response.json();
    }).then(function (json) {
        console.log(json);
        console.log(json[0]);
        const quote = json[0];
        const author = json[1];
        document.getElementById("quote").innerHTML = quote;
        document.getElementById("author").innerHTML = author;
    });
