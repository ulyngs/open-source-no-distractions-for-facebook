// popup.js
document.addEventListener('DOMContentLoaded', function() {
  var checkButton = document.getElementById('feedToggle');
  checkButton.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {method: "changeFeed"}, function(response) {
          if(response.method == "changeFeed"){
              if(response.text === "newsfeed visible"){
                  checkButton.innerHTML = "Hide newsfeed"
              } else {
                  checkButton.innerHTML = "Show newsfeed";
              }
          }
        });
      });
  }, false);
}, false);
