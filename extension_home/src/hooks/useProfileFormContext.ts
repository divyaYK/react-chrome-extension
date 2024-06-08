import React from "react";
import { ProfileFormContext } from "../context/ProfileFormContext";

const useProfileFormContext = () => {
  const { ...values } = React.useContext(ProfileFormContext);
  return values;
};

export default useProfileFormContext;
