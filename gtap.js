
var word;
var cors = "https://cors-anywhere.herokuapp.com/"
function initApplication() {
    var link2 = cors + "https://www.dictionary.com/e/word-of-the-day/"
    var indexRequest = new XMLHttpRequest();
    indexRequest.open('GET', link2);
    indexRequest.onload = function() {
        console.log("website" + indexRequest.responseText);
        document.getElementById("indexID").innerHTML = indexRequest.responseText;
        var res = (indexRequest.responseText).split(" ", 200);
        console.log(res[179]);
        document.getElementById("indexID").innerHTML = res[179]
        word = res[179]
        loadIndex(word);
    }
    indexRequest.send();
}

function loadIndex(word) {
    var data = null;
    var link = "https://microsoft-azure-translation-v1.p.rapidapi.com/translate?from=en&to=es&text=";
    link += word;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
        console.log(this.responseText);
        document.getElementById("wordID").innerHTML = this.responseText;
	}
});

xhr.open("GET", link );
xhr.setRequestHeader("x-rapidapi-host", "microsoft-azure-translation-v1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "0d8ce3de65mshafcf99926226a2cp1f78e5jsn5f88341225c9");
xhr.setRequestHeader("accept", "application/json");

xhr.send(data);
}