const registerBackgroundEventListeners = () => {
  chrome.webNavigation.onDOMContentLoaded.addListener((details) => {
    console.log({ details }, "hello");
  });

  chrome.runtime.onMessage.addListener((message) => {
    chrome.tabs.create({ url: message.url });
  });
};

(() => {
  registerBackgroundEventListeners();
})();
