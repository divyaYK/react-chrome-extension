export interface IEducationEntity {
  entityName?: string;
  specialization?: string;
  duration?: {
    start?: string;
    end?: string;
  };
}

export interface IWorkExperience {
  companyName?: string;
  duration?: {
    start?: string;
    end?: string;
    current?: boolean;
  };
  description?: string;
}

export interface IProfileFormValues {
  firstName?: string;
  lastName?: string;
  fullName?: string;
  country?: string;
  address?: {
    city?: string;
    postalCode?: string;
    addressLine?: string;
  };
  email?: string;
  phoneNumber?: string;
  socialLinks?: { [x: string]: string };
  workExperience?: IWorkExperience[];
  skills?: string[];
  education?: IEducationEntity[];
}

export interface IExtendedProfileFormValues extends IProfileFormValues {
  miscellaneous: { [x: string]: any };
}
