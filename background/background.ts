const registerBackgroundEventListeners = () => {
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log({ request, sender, sendResponse });
    chrome.windows.create({
      url: chrome.runtime.getURL("https://amazon.in/"),
      type: "popup",
      width: 400,
      height: 600,
    });
  });
};

(() => {
  registerBackgroundEventListeners();
})();
