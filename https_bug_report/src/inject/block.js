chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
    	console.log('onBeforeRequest\t\t', details.url);
	},{urls: ["*://*/*angular-*"]}
);
chrome.webRequest.onBeforeSendHeaders.addListener(
    function(details) {
        console.log('onBeforeSendHeaders\t',details.url);
    },{urls: ["*://*/*angular-*"]}
);
chrome.webRequest.onSendHeaders.addListener(
    function(details) {
        console.log('onSendHeaders\t\t',details.url);
    },{urls: ["*://*/*angular-*"]}
);
chrome.webRequest.onResponseStarted.addListener(
    function(details) {
        console.log('onResponseStarted\t',details.url); 
    },{urls: ["*://*/*angular-*"]}
);
chrome.webRequest.onCompleted.addListener(
    function(details) {
        console.log('onCompleted\t\t\t',details.url);
    },{urls: ["*://*/*angular-*"]}
);
chrome.webRequest.onErrorOccurred.addListener(
    function(details) {
        console.log('onErrorOccurredonErrorOccurred',details.url);
    },{urls: ["*://*/*angular-*"]}
);
chrome.webRequest.onHeadersReceived.addListener(
    function(details) {
    	console.log('onHeadersReceived\t', details.url);
     },{urls: ["*://*/*angular-*"]}
);
chrome.webRequest.onBeforeRedirect.addListener(
    function(details) {
    	console.log('onBeforeRedirect\t\t', details.url);
     },{urls: ["*://*/*angular-*"]}
);

console.log('https_bug_report loaded');