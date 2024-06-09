const promptUser = () => {
  if (confirm("Would you like me to fill out the form for you?")) {
    fillForm();
  }
};

const fillForm = () => {
  // Example of filling out a form
  const form = document.querySelector("form");
  if (form) {
    (
      form.querySelector(
        'input[id="cntryFields.firstName"]',
      ) as HTMLInputElement
    ).value = "John Doe";
    (form.querySelector("#email") as HTMLInputElement).value =
      "john.doe@example.com";
  }
};

// const checkUrlAndExecute = () => {
//   const url = window.location.href;
//   const substrings = [
//     "careers",
//     "workday",
//     "indeed",
//     "jobs",
//     "employment",
//     "vacancies",
//     "positions",
//     "opportunities",
//   ];
//   if (substrings.some((substring) => url.includes(substring))) {
//     return true;
//   }
//   return false;
// };

const registerContentScriptEventListeners = () => {
  // chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  //   console.log({ request, sender, sendResponse });
  // });

  window.addEventListener("load", () => {
    const form = document.querySelector("form");
    console.log({ form });
    if (form) {
      console.log("found the form");
      promptUser();
    }
  });
};

(() => {
  registerContentScriptEventListeners();
})();
