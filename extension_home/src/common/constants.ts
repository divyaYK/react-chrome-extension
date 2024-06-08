export const ProfileFormInitialValues = {
  firstName: "",
  lastName: "",
  fullName: "",
  designation: "",
  email: "",
  phoneNumber: "",
  socialLinks: {
    portfolio: "",
  },
  address: {
    city: "",
    postalCode: "",
    addressLine: "",
  },
  workExperience: [
    {
      companyName: "",
      duration: {
        start: "",
        end: "",
        current: false,
      },
      description: "",
    },
  ],
  skills: [],
  education: [
    {
      entityName: "",
      specialization: "",
      duration: {
        start: "",
        end: "",
      },
    },
  ],
  miscellaneous: {},
};
