// content.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        feed = document.querySelector('div[role="main"] h3.x1heor9g.x1qlqyl8.x1pd3egz.x1a2a7pz.xzpqnlu.x1hyvwdk.xjm9jq1.x6ikm8r.x10wlt62.x10l6tqk.x1i1rx1s + div');
        mobileFeed = document.querySelectorAll('#screen-root div[data-screen-id="65549"] > div[data-mcomponent="MContainer"] > div.m.displayed:nth-child(n+6)');
        chatElements = document.querySelectorAll('div[role="complementary"] div[data-visualcompletion="ignore-dynamic"] > div.x1n2onr6');
        stories = document.querySelector('.x78zum5.x1q0g3np.xl56j7k.x1yztbdb.x1y1aw1k');
        storiesMobile = document.querySelector('#screen-root div[data-screen-id="65549"] > div[data-mcomponent="MContainer"] > div.m.displayed:nth-of-type(4)');
        watchMobile = document.querySelectorAll('#screen-root div[data-mcomponent="MContainer"] > div.m.displayed:nth-child(2) > div.m:nth-child(2) > div.m:nth-child(4) > div.m:nth-child(1), #screen-root div[data-mcomponent="MContainer"] > div.m.displayed:nth-child(2) > div.m:nth-child(2) > div.m:nth-child(4) > div.m:nth-child(3)');
        
        function checkElement(method_to_send, element, css_to_change, is_multi_element){
            if (is_multi_element){
                element_to_check = element[0];
            } else {
                element_to_check = element;
            }
            
            if (css_to_change === "visibility"){
                if (element_to_check.style.visibility === "hidden") {
                    sendResponse({text: "hidden", method: method_to_send});
                } else if (element_to_check.style.visibility === "visible") {
                    sendResponse({text: "visible", method: method_to_send});
                } else {
                    sendResponse({text: "hidden", method: method_to_send});
                }
            } else if (css_to_change === "display"){
                if (element_to_check.style.display === "none") {
                    sendResponse({text: "hidden", method: method_to_send});
                } else if (element_to_check.style.display === "block") {
                    sendResponse({text: "visible", method: method_to_send});
                } else {
                    sendResponse({text: "hidden", method: method_to_send});
                }
            }
        };
        
        // check for visibility
        if(request.method == "checkFeed"){
            checkElement("checkFeed", feed, "visibility", is_multi_element = false);
        }
        
        if(request.method == "checkMobileFeed"){
            checkElement("checkMobileFeed", feed, "display", is_multi_element = true);
        }
        
        if(request.method == "checkChat"){
            checkElement("checkChat", chatElements, "visibility", is_multi_element = true);
        }
        
        if(request.method == "checkStories"){
            checkElement("checkStories", stories, "display", is_multi_element = false);
        }
        
        if(request.method == "checkStoriesMobile"){
            checkElement("checkStoriesMobile", storiesMobile, "display", is_multi_element = false);
        }
        
        if(request.method == "checkWatchMobile"){
            checkElement("checkStoriesMobile", storiesMobile, "visibility", is_multi_element = true);
        }
        
        // change visibility
        function toggleElement(element, css_to_change, is_multi_element){
            if (is_multi_element){
                element_to_check = element[0];
            } else {
                element_to_check = element;
            }
            
            if (css_to_change === "visibility"){
                if (element_to_check.style.visibility === "hidden") {
                    if (is_multi_element){
                        for (var i = 0, max = element.length; i < max; i++) {
                            element[i].style.visibility = "visible";
                        }
                    } else {
                        element.style.visibility = "visible";
                    }
                    
                } else if (element_to_check.style.visibility === "visible") {
                    if (is_multi_element){
                        for (var i = 0, max = element.length; i < max; i++) {
                            element[i].style.visibility = "hidden";
                        }
                    } else {
                        element.style.visibility = "hidden";
                    }
                } else {
                    if (is_multi_element){
                        for (var i = 0, max = element.length; i < max; i++) {
                            element[i].style.visibility = "visible";
                        }
                    } else {
                        element.style.visibility = "visible";
                    }
                }
            } else if (css_to_change === "display"){
                if (element_to_check.style.display === "none") {
                    if (is_multi_element){
                        for (var i = 0, max = element.length; i < max; i++) {
                            element[i].style.display = "block";
                        }
                    } else {
                        element.style.display = "block";
                    }
                    
                } else if (element_to_check.style.display === "block") {
                    if (is_multi_element){
                        for (var i = 0, max = element.length; i < max; i++) {
                            element[i].style.display = "none";
                        }
                    } else {
                        element.style.display = "none";
                    }
                } else {
                    if (is_multi_element){
                        for (var i = 0, max = element.length; i < max; i++) {
                            element[i].style.display = "block";
                        }
                    } else {
                        element.style.display = "block";
                    }
                }
            }
        };
        
        if(request.method == "changeFeed"){
            toggleElement(feed, "visibility", is_multi_element = false);
        }
        
        if(request.method == "changeMobileFeed"){
            toggleElement(mobileFeed, "display", is_multi_element = true);
        }
        
        if(request.method == "changeChat"){
            toggleElement(chatElements, "visibility", is_multi_element = true);
        }
        
        if(request.method == "changeStories"){
            toggleElement(stories, "display", is_multi_element = false);
        }
        
        if(request.method == "changeStoriesMobile"){
            toggleElement(storiesMobile, "display", is_multi_element = false);
        }
        
        if(request.method == "changeWatchMobile"){
            toggleElement(watchMobile, "visibility", is_multi_element = true);
        }
    }
);

