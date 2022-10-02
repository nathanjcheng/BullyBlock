const switchy = document.getElementById('toggle');
var bullyblock;
chrome.storage.sync.get(['key'], function(result) {
    console.log('Set bully block to ' + result.key)
    bullyblock = result.key;
});
if (bullyblock) {
    switchy.setAttribute('checked', "checked");
    console.log("Set the switch on!");
} else {
    switchy.removeAttribute('checked');
    console.log("Set the switch off!");
}
switchy.addEventListener('change', function(event) {
    if (bullyblock) {
        switchy.removeAttribute('checked')
        bullyblock = false;
        chrome.storage.sync.set({key: false}, function() {
            console.log('Value is set to ' + false);
        });
    } else {
        switchy.setAttribute('checked', "checked");
        bullyblock = true;
        chrome.storage.sync.set({key: true}, function() {
            console.log('Value is set to ' + true);
        });
    }
    console.log("BULLYBLOCK IS " + bullyblock);
});

