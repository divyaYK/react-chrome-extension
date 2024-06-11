import { getValueFromLocation } from "./helpers";

const fieldMap = {
  firstName: { searchValue: "firstName", location: "firstName" },
  lastName: { searchValue: "lastName", location: "lastName" },
  fullName: { searchValue: "fullName", location: "fullName" },
  email: { searchValue: "email", location: "email" },
  city: { searchValue: "addressSection_city", location: "address.city" },
  postalCode: {
    searchValue: "addressSection_postalCode",
    location: "address.postalCode",
  },
  addressLine: {
    searchValue: "addressSection_addressLine",
    location: "address.addressLine",
  },
  phoneNumber: { searchValue: "phone-number", location: "phoneNumber" },
};

export const WorkDayFormFiller = async () => {
  const allInputFields = document.querySelectorAll("input[data-automation-id]");
  const profileData = (await chrome.storage.sync.get("profileData"))
    .profileData;
  const inputFieldArray = Array.from(allInputFields);
  console.log({ inputFieldArray, profileData });
  inputFieldArray.forEach((inputField) => {
    const dataAutomationValue = inputField.getAttribute("data-automation-id");
    if (dataAutomationValue) {
      Object.keys(fieldMap).forEach((eachKey) => {
        if (dataAutomationValue.includes(fieldMap[eachKey].searchValue)) {
          (inputField as HTMLInputElement).value = getValueFromLocation(
            fieldMap[eachKey].location,
            profileData,
          );
        }
      });
    }
  });
};
