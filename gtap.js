var word;
var cors = "https://cors-anywhere.herokuapp.com/"
function initApplication() {
    var indexRequest = new XMLHttpRequest();
    indexRequest.open('GET', 'https://cors-anywhere.herokuapp.com/https://www.dictionary.com/e/word-of-the-day/');
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

function loadIndexx(word) {
    
    var link = cors + "https://www.linguee.com/english-french/search?source=auto&query=";
    link += word;
    link = "\"" + link + "\"";
    console.log(link);

var indexRequest = new XMLHttpRequest();
indexRequest.open("GET", "https://www.linguee.com/english-french/search?source=auto&query=bye");
    console.log("website" + indexRequest.responseText);
    var trans = (indexRequest.responseText).split(">", 330);
        console.log(trans[328]);
        document.getElementById("indexID").innerHTML = trans[328];    
    document.getElementById("wordID").innerHTML = indexRequest.responseText;
//xhr.send(data);

}
function loadIndex(word) {
    var link = "https://microsoft-azure-translation-v1.p.rapidapi.com/translate?from=en&to=es&text=";
    link += word;
    //link = "\"" + link + "\"";
    console.log(link);
    var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", link);
xhr.setRequestHeader("x-rapidapi-host", "microsoft-azure-translation-v1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "0d8ce3de65mshafcf99926226a2cp1f78e5jsn5f88341225c9");
xhr.setRequestHeader("accept", "application/json");
console.log(xhr.responseText);

xhr.send(data);

}