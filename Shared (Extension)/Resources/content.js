// content.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.method == "changeFeed"){
            feed = document.querySelector('.pedkr2u6.tn0ko95a.pnx7fd3z div[role="feed"]');
            
            console.log(feed.style.visibility);
            
            if (feed.style.visibility === "hidden") {
                feed.style.visibility = "visible";
                sendResponse({text: "newsfeed visible", method: "changeFeed"});
            } else if (feed.style.visibility === "visible") {
                feed.style.visibility = "hidden";
                sendResponse({text: "newsfeed hidden", method: "changeFeed"});
            } else {
                feed.style.visibility = "visible";
                sendResponse({text: "newsfeed visible", method: "changeFeed"});
            }
        }
        
        if(request.method == "changeChat"){
            chatElements = document.querySelectorAll('div[data-pagelet="RightRail"] div[data-visualcompletion="ignore-dynamic"] > div[class = "l9j0dhe7"');
            
            if (chatElements[0].style.visibility === "hidden") {
                for (var i = 0, max = chatElements.length; i < max; i++) {
                    chatElements[i].style.visibility = "visible";
                }
                
                sendResponse({text: "chat visible", method: "changeChat"});
            } else if (chatElements[0].style.visibility === "visible") {
                for (var i = 0, max = chatElements.length; i < max; i++) {
                    chatElements[i].style.visibility = "hidden";
                }
                sendResponse({text: "chat hidden", method: "changeChat"});
            } else {
                for (var i = 0, max = chatElements.length; i < max; i++) {
                    chatElements[i].style.visibility = "visible";
                }
                sendResponse({text: "chat visible", method: "changeChat"});
            }
        }
    }
);


