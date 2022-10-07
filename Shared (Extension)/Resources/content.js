// content.js

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        feed = document.querySelector('#ssrb_feed_start + div');
        mobileFeed = document.querySelectorAll('#screen-root div[data-screen-id="65549"] > div[data-mcomponent="MContainer"] > div.m.displayed:nth-child(n+6)');
        chatElements = document.querySelectorAll('div[role="complementary"] div[data-visualcompletion="ignore-dynamic"] > div.x1n2onr6');
        stories = document.querySelector('.x78zum5.x1q0g3np.xl56j7k.x1yztbdb.x1y1aw1k');
        storiesMobile = document.querySelector('#screen-root div[data-screen-id="65549"] > div[data-mcomponent="MContainer"] > div.m.displayed:nth-of-type(4)');
        watchMobile = document.querySelectorAll('#screen-root div[data-mcomponent="MContainer"] > div.m.displayed:nth-child(2) > div.m:nth-child(2) > div.m:nth-child(4) > div.m:nth-child(1), #screen-root div[data-mcomponent="MContainer"] > div.m.displayed:nth-child(2) > div.m:nth-child(2) > div.m:nth-child(4) > div.m:nth-child(3)');
        
        
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
            if (mobileFeed[0].style.display === "none") {
                sendResponse({text: "hidden", method: "checkMobileFeed"});
            } else if (mobileFeed[0].style.display === "block") {
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
        
        if(request.method == "checkWatchMobile"){
            if (watchMobile[1].style.visibility === "hidden") {
                sendResponse({text: "hidden", method: "checkWatchMobile"});
            } else if (watchMobile[1].style.visibility === "visible") {
                sendResponse({text: "visible", method: "checkWatchMobile"});
            } else {
                sendResponse({text: "hidden", method: "checkWatchMobile"});
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
            if (mobileFeed[1].style.display === "none") {
                //mobileFeed.style.display = "block";
                for (var i = 0, max = mobileFeed.length; i < max; i++) {
                    mobileFeed[i].style.display = "block";
                }
                
                sendResponse({text: "mobileFeed visible", method: "changeMobileFeed"});
            } else if (mobileFeed[1].style.display === "block") {
                //mobileFeed.style.display = "none";
                for (var i = 0, max = mobileFeed.length; i < max; i++) {
                    mobileFeed[i].style.display = "none";
                }
                
                sendResponse({text: "mobileFeed hidden", method: "changeMobileFeed"});
            } else {
                //mobileFeed.style.display = "block";
                for (var i = 0, max = mobileFeed.length; i < max; i++) {
                    mobileFeed[i].style.display = "block";
                }
                
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
        
        if(request.method == "changeWatchMobile"){
            if (watchMobile[1].style.visibility === "hidden") {
                //watchMobile.style.display = "block";
                for (var i = 0, max = watchMobile.length; i < max; i++) {
                    watchMobile[i].style.visibility = "visible";
                }
                sendResponse({text: "watch visible", method: "changeWatchMobile"});
            } else if (watchMobile[1].style.visibility === "visible") {
                //watchMobile.style.display = "none";
                for (var i = 0, max = watchMobile.length; i < max; i++) {
                    watchMobile[i].style.visibility = "hidden";
                }
                sendResponse({text: "watch hidden", method: "changeWatchMobile"});
            } else {
                //watchMobile[1].style.display = "block";
                for (var i = 0, max = watchMobile.length; i < max; i++) {
                    watchMobile[i].style.visibility = "visible";
                }
                sendResponse({text: "watch visible", method: "changeWatchMobile"});
            }
        }
    }
);

