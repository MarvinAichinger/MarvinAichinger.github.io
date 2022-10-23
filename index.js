//url: https://raw.githubusercontent.com/MarvinAichinger/MarvinAichinger.github.io/master/ff-fragenkatalog/fragen.txt

function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    xhr = null;
  }
  return xhr;
}

function makeCorsRequest() {
  var url = "https://raw.githubusercontent.com/MarvinAichinger/MarvinAichinger.github.io/master/ff-fragenkatalog/fragen.txt";

  var xhr = createCORSRequest("GET", url);
  if (!xhr) {
    alert("CORS not supported");
    return;
  }

  xhr.onload = function () {
    var text = xhr.responseText;
    //console.log(text)
    readQuestions(text)
  };

  xhr.onerror = function () {
    alert("Woops, there was an error making the request.");
  };

  xhr.send();
}

function readQuestions(text) {

    let arr = text.split("---")

}


//start
makeCorsRequest()