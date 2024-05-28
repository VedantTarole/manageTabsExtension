console.log("Hi from popup.js");
window.addEventListener("DOMContentLoaded", function () {
  let allTabs = [];

  chrome.runtime.sendMessage({ type: "getTabs" }, function (response) {
    console.log(response);
  });
});
