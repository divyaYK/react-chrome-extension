import React, { useCallback } from "react";
import { IExtendedProfileFormValues } from "../common/types";
import { ProfileFormInitialValues } from "../common/constants";

interface IProfileFormContext extends IExtendedProfileFormValues {
  setProfileValues: (values: IExtendedProfileFormValues) => void;
}

const InitialValuesForContext = {
  ...ProfileFormInitialValues,
  setProfileValues: () => undefined,
};

export const ProfileFormContext = React.createContext<IProfileFormContext>(
  InitialValuesForContext,
);

export const ProfileFormContextProvider = ({ children }) => {
  const [allProfileValues, setAllProfileValues] =
    React.useState<IExtendedProfileFormValues>(ProfileFormInitialValues);
  const changeHandlerForProfileValues = useCallback(
    (values: IExtendedProfileFormValues) => {
      setAllProfileValues(values);
    },
    [setAllProfileValues],
  );
  return (
    <ProfileFormContext.Provider
      value={{
        ...allProfileValues,
        setProfileValues: changeHandlerForProfileValues,
      }}
    >
      {children}
    </ProfileFormContext.Provider>
  );
};
