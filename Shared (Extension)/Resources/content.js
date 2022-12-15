 (function() {
     /**
      * Check and set a global guard variable.
      * If this content script is injected into the same page again,
      * it will do nothing next time.
      */
     if (window.hasRun) {
       return;
     }
     window.hasRun = true;
     
     const elementsThatCanBeHidden = [ "facebookFeed", "facebookWatch", "facebookNotifications", "facebookStories", "facebookChat" ];
     
     // Facebook CSS
     const facebookFeedCssOn = '#ssrb_feed_start + div { visibility: visible; } #m_news_feed_stream, #screen-root div[data-screen-id="65549"] > div[data-mcomponent="MContainer"] > div.m.displayed:nth-child(n+6) { display: block; }'
     const facebookFeedCssOff = '#ssrb_feed_start + div { visibility: hidden; } #m_news_feed_stream, #screen-root div[data-screen-id="65549"] > div[data-mcomponent="MContainer"] > div.m.displayed:nth-child(n+6) { display: none; }'
     
     const facebookWatchCssOn = '#screen-root div[data-mcomponent="MScreen"] div[data-mcomponent="MContainer"] div[data-mcomponent="MContainer"]:nth-child(2) div[role="button"]:nth-child(4) {display: flex;}'
     const facebookWatchCssOff = '#screen-root div[data-mcomponent="MScreen"] div[data-mcomponent="MContainer"] div[data-mcomponent="MContainer"]:nth-child(2) div[role="button"]:nth-child(4) {display: none;}'
     
     const facebookNotificationsCssOn = 'div[aria-label^="Notifications"], #screen-root div[data-mcomponent="MScreen"] div[data-mcomponent="MContainer"] div[data-mcomponent="MContainer"]:nth-child(2) div[role="button"]:nth-child(5) div[data-mcomponent="MContainer"]:nth-child(3) {display: flex;}'
     const facebookNotificationsCssOff = 'div[aria-label^="Notifications"], #screen-root div[data-mcomponent="MScreen"] div[data-mcomponent="MContainer"] div[data-mcomponent="MContainer"]:nth-child(2) div[role="button"]:nth-child(5) div[data-mcomponent="MContainer"]:nth-child(3) {display: none;}'
     
     const facebookChatCssOn = 'div[role="complementary"] div[data-visualcompletion="ignore-dynamic"] > div.x1n2onr6 { visibility: visible; }'
     const facebookChatCssOff = 'div[role="complementary"] div[data-visualcompletion="ignore-dynamic"] > div.x1n2onr6 { visibility: hidden; }'
     
     const facebookStoriesCssOn = '.x78zum5.x1q0g3np.xl56j7k.x1yztbdb.x1y1aw1k { display: block; } #screen-root div[data-mcomponent="MContainer"] > div[data-mcomponent="MContainer"]:has(div[aria-label*="story"]) { display: flex;}'
     const facebookStoriesCssOff = '.x78zum5.x1q0g3np.xl56j7k.x1yztbdb.x1y1aw1k { display: none; } #screen-root div[data-mcomponent="MContainer"] > div[data-mcomponent="MContainer"]:has(div[aria-label*="story"]) { display: none;}'
     
     
     // function to create style element with the specified CSS content
     function createStyleElement(some_style_id, some_css){
         if(!document.getElementById(some_style_id)){
             var styleElement = document.createElement("style");
             styleElement.id = some_style_id;
             document.head.appendChild(styleElement).innerHTML = some_css;
         } else {
             document.getElementById(some_style_id).innerHTML = some_css;
         };
     };
     
     elementsThatCanBeHidden.forEach(function (item) {
         console.log("create the styles " + item);
         var styleName = item + "Style";
         var key = item + "Status";
         
         browser.storage.sync.get(key, function(result) {
             if (result[key] == true){
                 createStyleElement(styleName, eval(item + "CssOn"));
             } else {
                 createStyleElement(styleName, eval(item + "CssOff"));
             };
         });
     });
     
     // let the popup ask for the current status of the elements and of the saved state
     chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
         function checkStyleStatus(currentStyle, some_css_for_shown){
             if (currentStyle == undefined){
                 sendResponse({text: "not on active tab"});
             } else if (currentStyle.innerHTML === some_css_for_shown) {
                 sendResponse({text: "visible"});
             } else {
                 sendResponse({text: "hidden"});
             };
         };
     
         if(request.method === "check"){
             var currentStyle = document.getElementById(request.element + "Style");
     
             checkStyleStatus(currentStyle, eval(request.element + 'CssOn'));
         };
     });
     
     // let the content script toggle elements when the popup asks for it
     function toggleHiding(some_style_id, css_shown, css_hidden, status){
         var styleElement = document.getElementById(some_style_id);
     
         if(status == true){
             styleElement.innerHTML = css_shown;
         } else {
             styleElement.innerHTML = css_hidden;
         };
     };
     
     browser.runtime.onMessage.addListener((message) => {
         // toggle hiding when popup asks
         if(message.method === "change"){
             toggleHiding(message.element + 'Style', eval(message.element + 'CssOn'), eval(message.element + 'CssOff'),  message.status);
         };
     });
 })();
