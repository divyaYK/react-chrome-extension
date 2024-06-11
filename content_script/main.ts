import { MainContentFunction } from "./scriptFunctions";

const registerContentScriptEventListeners = () => {
  // chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  //   console.log({ request, sender, sendResponse });
  // });
  MainContentFunction();
};

(() => {
  registerContentScriptEventListeners();
})();
