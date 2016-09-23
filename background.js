var callback = function(details) {
    alert("hello");
};
var filter = {urls: ["<all_urls>"]};
var opt_extraInfoSpec = [];

chrome.webRequest.onBeforeRequest.addListener(
        callback, filter, opt_extraInfoSpec);
