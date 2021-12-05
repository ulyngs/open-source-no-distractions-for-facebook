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
    }
);


