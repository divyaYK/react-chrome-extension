import { WorkDayFormFiller } from "./workdayFiller";

export const checkIfWebsiteIsForJobs = () => {
  const url = window.location.href;
  console.log({ url }, "check if website is for jobs");
  const substrings = [
    "careers",
    "workday",
    "indeed",
    "vacancies",
    "positions",
    "opportunities",
    "boards.greenhouse.io",
    "naukri",
  ];
  if (substrings.some((substring) => url.includes(substring))) {
    return true;
  }
  return false;
};

export const checkIfApplicationIsVisible = () => {
  const url = window.location.href;
  console.log({ url }, "check if application is visible");
  const substrings = ["apply", "jobSeqNo", "jobId"];
  if (substrings.some((substring) => url.includes(substring))) {
    return true;
  }
  return false;
};

export const promptUser = () => {
  const promptComponent = document.createElement("div");
  promptComponent.setAttribute("id", "autofill-popup");
  promptComponent.innerHTML = `
  <div style="background-color: white; color: black; display: flex; flex-direction: column; align-items: center; gap: 20px; min-height: 150px; min-width: 200px; position: absolute; right: 0; top: 0; padding: 20px; justify-content: center; border-bottom-left-radius: 20px; box-shadow: 14px -11px 10px 20px rgba(0, 0, 0, 0.2); box-sizing: border-box; z-index: 200;">
  <h4 style="font-size: 1rem;">Would you like us to autofill the form?</h4>
  <div style="display: flex; align-items: center; gap: 10px;">
    <button id="autofill-no" style="background-color: #228be6; color: #ffffff; display: inline-block; height: 30px; border: none; border-radius: 4px; padding: 5px 10px; width: 60px;">No</button>
    <button id="autofill-yes" style="background-color: #228be6; color: #ffffff; display: inline-block; height: 30px; border: none; border-radius: 4px; padding: 5px 10px; width: 60px;">Yes</button>
  </div>
</div>
  `;
  const bodyElement = document.querySelector("body");
  if (bodyElement) {
    bodyElement.appendChild(promptComponent);
  }
};

export const closePopup = () => {
  const popup = document.getElementById("autofill-popup");
  if (popup) {
    popup.remove();
  }
};

export const MainContentFunction = () => {
  console.log("entered load phase");
  const isTargetWebsite = checkIfWebsiteIsForJobs();
  console.log({ isTargetWebsite });
  if (isTargetWebsite) {
    const isApplicationVisible = checkIfApplicationIsVisible();
    console.log({ isApplicationVisible });
    if (isApplicationVisible) {
      promptUser();
      const yesButton = document.getElementById("autofill-yes");
      const noButton = document.getElementById("autofill-no");

      if (yesButton) {
        yesButton.addEventListener("click", () => {
          WorkDayFormFiller();
          closePopup();
        });
      }

      if (noButton) {
        noButton.addEventListener("click", () => {
          closePopup();
        });
      }
    }
  }
};
