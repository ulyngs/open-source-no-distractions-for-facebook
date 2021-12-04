// content.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.method == "changePage"){
            feed = document.querySelector('.pedkr2u6.tn0ko95a.pnx7fd3z div[role="feed"]');
            
            console.log(feed.style.visibility);
            
            if (feed.style.visibility === "hidden") {
                feed.style.visibility = "visible";
                sendResponse({text: "newsfeed visible", method: "changePage"}); //same as innerText
            } else if (feed.style.visibility === "visible") {
                feed.style.visibility = "hidden";
                sendResponse({text: "newsfeed hidden", method: "changePage"}); //same as innerText
            } else {
                feed.style.visibility = "visible";
                sendResponse({text: "newsfeed visible", method: "changePage"}); //same as innerText
            }
        }
    }
);


