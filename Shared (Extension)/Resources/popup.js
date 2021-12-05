// popup.js
// https://developer.chrome.com/docs/extensions/mv3/messaging/

document.addEventListener('DOMContentLoaded', function() {
    var checkButton = document.getElementById('feedToggle');
    checkButton.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {method: "changeFeed"}, function(response) {
            if(response.method == "changeFeed"){
                if(response.text === "newsfeed visible"){
                    console.log("Newsfeed is visible")
                } else {
                    console.log("Newsfeed is hidden")
                }
            }
        });
      });
    }, false);
    
    var feedMobileButton = document.getElementById('feedMobileToggle');
    feedMobileButton.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {method: "changeMobileFeed"}, function(response) {
            if(response.method == "changeMobileFeed"){
                if(response.text === "newsfeed visible"){
                    console.log("Newsfeed is visible")
                } else {
                    console.log("Newsfeed is hidden")
                }
            }
        });
      });
    }, false);
    
    var chatButton = document.getElementById('chatToggle');
    chatButton.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {method: "changeChat"}, function(response) {
              if(response.method == "changeChat"){
                  if(response.text === "chat visible"){
                      console.log("Chat is visible")
                  } else {
                      console.log("Chat is hidden")
                  }
              }
          });
        });
    }, false);
    
    var storiesButton = document.getElementById('storiesToggle');
    storiesButton.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {method: "changeStories"}, function(response) {
              if(response.method == "changeStories"){
                  if(response.text === "stories visible"){
                      console.log("Stories are visible")
                  } else {
                      console.log("Stories are hidden")
                  }
              }
          });
        });
    }, false);
    
    var videoButton = document.getElementById('videoToggle');
    videoButton.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {method: "changeVideo"}, function(response) {
              if(response.method == "changeVideo"){
                  if(response.text === "video visible"){
                      console.log("Video prompt is visible")
                  } else {
                      console.log("Video prompt is hidden")
                  }
              }
          });
        });
    }, false);
    
}, false);
