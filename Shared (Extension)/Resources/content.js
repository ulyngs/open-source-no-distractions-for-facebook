// content.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        feed = document.querySelector('.pedkr2u6.tn0ko95a.pnx7fd3z div[role="feed"]');
        mobileFeed = document.querySelector('#m_news_feed_stream');
        chatElements = document.querySelectorAll('div[data-pagelet="RightRail"] div[data-visualcompletion="ignore-dynamic"] > div[class = "l9j0dhe7"');
        stories = document.querySelector('div[data-pagelet="Stories"]');
        storiesMobile = document.querySelector('#MStoriesTray');
        video = document.querySelector('div[data-pagelet="VideoChatHomeUnit"]');
        watch = document.querySelector('a[aria-label^="Watch"]');
        
        
        // check for visibility
        if(request.method == "checkFeed"){
            if (feed.style.visibility === "hidden") {
                sendResponse({text: "hidden", method: "checkFeed"});
            } else if (feed.style.visibility === "visible") {
                sendResponse({text: "visible", method: "checkFeed"});
            } else {
                sendResponse({text: "hidden", method: "checkFeed"});
            }
        }
        
        if(request.method == "checkMobileFeed"){
            if (mobileFeed.style.display === "none") {
                sendResponse({text: "hidden", method: "checkMobileFeed"});
            } else if (mobileFeed.style.display === "block") {
                sendResponse({text: "visible", method: "checkMobileFeed"});
            } else {
                sendResponse({text: "hidden", method: "checkMobileFeed"});
            }
        }
        
        if(request.method == "checkChat"){
            if (chatElements[0].style.visibility === "hidden") {
                sendResponse({text: "hidden", method: "checkChat"});
            } else if (chatElements[0].style.visibility === "visible") {
                sendResponse({text: "visible", method: "checkChat"});
            } else {
                sendResponse({text: "joddem", method: "checkChat"});
            }
        }
        
        if(request.method == "checkStories"){
            if (stories.style.display === "none") {
                sendResponse({text: "hidden", method: "checkStories"});
            } else if (stories.style.display === "block") {
                sendResponse({text: "visible", method: "checkStories"});
            } else {
                sendResponse({text: "hidden", method: "checkStories"});
            }
        }
        
        if(request.method == "checkStoriesMobile"){
            if (storiesMobile.style.display === "none") {
                sendResponse({text: "hidden", method: "checkStoriesMobile"});
            } else if (storiesMobile.style.display === "block") {
                sendResponse({text: "visible", method: "checkStoriesMobile"});
            } else {
                sendResponse({text: "hidden", method: "checkStoriesMobile"});
            }
        }
        
        if(request.method == "checkVideo"){
            if (video.style.display === "none") {
                sendResponse({text: "hidden", method: "checkVideo"});
            } else if (video.style.display === "block") {
                sendResponse({text: "visible", method: "checkVideo"});
            } else {
                sendResponse({text: "hidden", method: "checkVideo"});
            }
        }
        
        if(request.method == "checkWatch"){
            if (watch.style.display === "none") {
                sendResponse({text: "hidden", method: "checkWatch"});
            } else if (watch.style.display === "block") {
                sendResponse({text: "visible", method: "checkWatch"});
            } else {
                sendResponse({text: "hidden", method: "checkWatch"});
            }
        }
        
        // change visibility
        if(request.method == "changeFeed"){
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
        
        if(request.method == "changeMobileFeed"){
            if (mobileFeed.style.display === "none") {
                mobileFeed.style.display = "block";
                sendResponse({text: "mobileFeed visible", method: "changeMobileFeed"});
            } else if (mobileFeed.style.display === "block") {
                mobileFeed.style.display = "none";
                sendResponse({text: "mobileFeed hidden", method: "changeMobileFeed"});
            } else {
                mobileFeed.style.display = "block";
                sendResponse({text: "mobileFeed visible", method: "changeMobileFeed"});
            }
        }
        
        if(request.method == "changeChat"){
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
        
        if(request.method == "changeStories"){
            if (stories.style.display === "none") {
                stories.style.display = "block";
                sendResponse({text: "stories visible", method: "changeStories"});
            } else if (stories.style.display === "block") {
                stories.style.display = "none";
                sendResponse({text: "stories hidden", method: "changeStories"});
            } else {
                stories.style.display = "block";
                sendResponse({text: "stories visible", method: "changeStories"});
            }
        }
        
        if(request.method == "changeStoriesMobile"){
            if (storiesMobile.style.display === "none") {
                storiesMobile.style.display = "block";
                sendResponse({text: "stories visible", method: "changeStoriesMobile"});
            } else if (storiesMobile.style.display === "block") {
                storiesMobile.style.display = "none";
                sendResponse({text: "stories hidden", method: "changeStoriesMobile"});
            } else {
                storiesMobile.style.display = "block";
                sendResponse({text: "stories visible", method: "changeStoriesMobile"});
            }
        }
        
        if(request.method == "changeVideo"){
            if (video.style.display === "none") {
                video.style.display = "block";
                sendResponse({text: "video visible", method: "changeVideo"});
            } else if (video.style.display === "block") {
                video.style.display = "none";
                sendResponse({text: "video hidden", method: "changeVideo"});
            } else {
                video.style.display = "block";
                sendResponse({text: "video visible", method: "changeVideo"});
            }
        }
        
        if(request.method == "changeWatch"){
            if (watch.style.display === "none") {
                watch.style.display = "block";
                sendResponse({text: "watch visible", method: "changeWatch"});
            } else if (watch.style.display === "block") {
                watch.style.display = "none";
                sendResponse({text: "watch hidden", method: "changeWatch"});
            } else {
                watch.style.display = "block";
                sendResponse({text: "watch visible", method: "changeWatch"});
            }
        }
    }
);


