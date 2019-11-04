var contactURLArray = [];
var contactArray = [];
var loadingContact = 0;
var contacts = [];

function initApplication() {
    console.log('Mustang Lite - Starting!'); 
}

function loadIndex() {
    // Load the Mustang index file.
    var indexRequest = new XMLHttpRequest();
    indexRequest.open('GET', 'https://mustang-index.azurewebsites.net/index.json');
    indexRequest.onload = function() {
        console.log("Index JSON:" + indexRequest.responseText);
        document.getElementById("indexID").innerHTML = indexRequest.responseText;
        contactIndex = JSON.parse(indexRequest.responseText);
        for (i=0; i<contactIndex.length; i++) {
            contactURLArray.push(contactIndex[i].ContactURL);
        }
        console.log("ContactURLArray: " + JSON.stringify(contactURLArray));
    }
    indexRequest.send();
}

function loadContacts() {
    // Clear the current contactArray.
    contactArray.length = 0;
    loadingContact = 0;

    // Note that W3C documentation and my experimentation indicate that each XMLHttpRequest callback function must be a 
    // unique instance of a function. A better implmentation would have had an array of callback functions and a multithreaded
    // inplementation instead of a recursive synchronous call to load.
    if (contactURLArray.length > loadingContact) {
        loadNextContact(contactURLArray[loadingContact]);
    }
}

function loadNextContact(URL) {
    console.log("URL: " + URL);
    contactRequest = new XMLHttpRequest();
    contactRequest.open('GET', URL);
    contactRequest.onload = function() {
        /* console.log(contactRequest.responseText);
        var contact;
        contact = JSON.parse(contactRequest.responseText);
        console.log("Contact: " + contact.firstName);
        contactArray.push(contact);
        document.getElementById("contactsID").innerHTML = JSON.stringify(contactArray);

        loadingContact++;
        if (contactURLArray.length > loadingContact) {
            loadNextContact(contactURLArray[loadingContact]);
        } */
        for (i = 0; i < contactURLArray.length; i++) {
            console.log(contactRequest.responseText);
        var contact;
        contact = JSON.parse(contactRequest.responseText);
        console.log("Contact: " + contact.firstName);
        contactArray.push(contact);
        document.getElementById("contactsID").innerHTML = JSON.stringify(contactArray);

        }
    }

    contactRequest.send();
}

function logContacts() {
    console.log(contactArray);
}

var progressBar = document.getElementById("progress"),
  loadBtn = document.getElementById("button"),
  display = document.getElementById("display");
  
var progressBar1 = document.getElementById("progress1"),
loadBtn1 = document.getElementById("button1"),
display1 = document.getElementById("display1");

function upload(data) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://zinoui.com/demo/progress-bar/upload.php", true);
  if (xhr.upload) {
    xhr.upload.onprogress = function(e) {
      if (e.lengthComputable) {
        progressBar.max = e.total;
        progressBar.value = e.loaded;
        display.innerText = Math.floor((e.loaded / e.total) * 100) + '%';
      }
    }
    xhr.upload.onloadstart = function(e) {
      progressBar.value = 0;
      display.innerText = '0%';
      
    }
    xhr.upload.onloadend = function(e) {
      progressBar.value = e.loaded;
      loadBtn.disabled = false;
      loadBtn.innerHTML = 'Load Index';
      
    }
  }
  xhr.send(data);
}

function buildFormData() {
  var fd = new FormData();

  for (var i = 0; i < 3000; i += 1) {
    fd.append('data[]', Math.floor(Math.random() * 999999));
  }

  return fd;
}

loadBtn.addEventListener("click", function(e) {
  this.disabled = true;
  this.innerHTML = "Loading...";
  upload(buildFormData());
});

