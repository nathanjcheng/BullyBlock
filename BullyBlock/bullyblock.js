function isExcluded(elm) {
  if (elm.tagName == "STYLE" ||
      elm.tagName == "SCRIPT" ||
      elm.tagName == "NOSCRIPT" ||
      elm.tagName == "IFRAME" ||
      elm.tagName == "OBJECT") {
    return true;
  }
  return false;
}

function traverse(elm) {
  if (elm.nodeType == Node.ELEMENT_NODE || elm.nodeType == Node.DOCUMENT_NODE) {
    if (isExcluded(elm)) {
      return
    }
    for (var i=0; i < elm.childNodes.length; i++) {
      traverse(elm.childNodes[i]);
    }
  }
  if (elm.nodeType == Node.TEXT_NODE) {
    // exclude unneeded text
    if (elm.nodeValue.trim() == "") {
      return
    }
    //reads text on webpage and compares to bad words array
    if (bullyblock == true) {
      for( let i = 0; i < badphrases.length; i++ ) {
        elm.nodeValue = elm.nodeValue.replace( badphrases[i] , asterisk( badphrases[i] ));
      }
    }
  }
}

//function prints the same amount of asterisks as the length of the bad phrase
function asterisk( badphrase ) {
  let asterisks = "";
  for( let i = 0; i < badphrase.length; i++ ) {
    asterisks += "*";
  }
  return asterisks;
}

traverse(document);
const config = { attributes: true, childList: true, subtree: true };

const callback = function(mutationsList, observer) {
    for(const mutation of mutationsList) {
        traverse(mutation.target);
    }
};

const observer = new MutationObserver(callback);
observer.observe(document, config);

