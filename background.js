chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type === "getTabs") {
    chrome.tabs.query({}, function (tabs) {
      sendResponse(tabs);
    });
    return true; // indicate that you wish to send a response asynchronously
  }
});
