// content.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.method == "changeFeed"){
            feed = document.querySelector('.pedkr2u6.tn0ko95a.pnx7fd3z div[role="feed"]');
            
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
            mobileFeed = document.querySelector('#m_news_feed_stream');
            
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
        
        if(request.method == "changeStories"){
            stories = document.querySelector('div[data-pagelet="Stories"]');
            
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
        
        if(request.method == "changeVideo"){
            video = document.querySelector('div[data-pagelet="VideoChatHomeUnit"]');
            
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
    }
);


