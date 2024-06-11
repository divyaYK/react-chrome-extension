import {
  Button,
  Container,
  FileInput,
  Flex,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useEffect, useState } from "react";
import { ProfileFormInitialValues } from "../common/constants";
import { IExtendedProfileFormValues } from "../common/types";

const Homepage = () => {
  const [initialFormValues, setInitialFormValues] =
    useState<IExtendedProfileFormValues>(ProfileFormInitialValues);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const profileForm = useForm<IExtendedProfileFormValues>({
    mode: "uncontrolled",
    initialValues: initialFormValues,
  });

  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };
  const base64ToFile = (base64: string, filename: string): File => {
    const arr = base64.split(",");
    const fullFile = arr[0].match(/:(.*?);/);
    const mime = fullFile ? fullFile[1] : undefined;
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmitHandler = async (values: typeof profileForm.values) => {
    const resumeBase64 = resumeFile
      ? await convertFileToBase64(resumeFile)
      : null;
    await chrome.storage.sync.set({
      profileData: { ...profileForm.getValues() },
    });
    await chrome.storage.local.set({ resume: resumeBase64 });
  };

  useEffect(() => {
    (async () => {
      const data = await chrome.storage.sync.get("profileData");
      const resumeData = await chrome.storage.local.get("resume");
      if (data) {
        setInitialFormValues(data.profileData);
        profileForm.setValues(data.profileData);
        if (resumeData.resume) {
          setResumeFile(base64ToFile(resumeData.resume, "resume.pdf"));
        }
        console.log({ profileData: data.profileData });
      }
    })();
  }, []);
  return (
    <Container fluid mih="100%">
      <Flex
        direction="column"
        justify="center"
        align="center"
        miw="100%"
        mih="100vh"
        gap="lg"
      >
        <Title>Autofill Extension</Title>
        <Text>
          Add/Edit the fields and your information here to autofill your job
          applications
        </Text>
        <form onSubmit={onSubmitHandler as any} action="">
          <Flex
            direction="column"
            wrap="wrap"
            align="flex-start"
            miw="100%"
            gap="md"
          >
            <TextInput
              label="First Name"
              placeholder="John"
              key={profileForm.key("firstName")}
              {...profileForm.getInputProps("firstName")}
            />
            <TextInput
              label="Last Name"
              placeholder="Doe"
              key={profileForm.key("lastName")}
              {...profileForm.getInputProps("lastName")}
            />
            <TextInput
              label="Full Name"
              placeholder="John Doe"
              key={profileForm.key("fullName")}
              defaultValue={
                profileForm.getValues().firstName +
                " " +
                profileForm.getValues().lastName
              }
              {...profileForm.getInputProps("fullName")}
            />
            <TextInput
              label="Email"
              placeholder="johndoe@example.com"
              key={profileForm.key("email")}
              {...profileForm.getInputProps("email")}
            />
            <TextInput
              label="Phone Number"
              placeholder="+91-9876543210"
              key={profileForm.key("phoneNumber")}
              {...profileForm.getInputProps("phoneNumber")}
            />
            <TextInput
              label="Country"
              placeholder="India"
              key={profileForm.key("address.country")}
              {...profileForm.getInputProps("address.country")}
            />
            <TextInput
              label="City"
              placeholder="Bengaluru"
              key={profileForm.key("address.city")}
              {...profileForm.getInputProps("address.city")}
            />
            <TextInput
              label="Postal Code"
              placeholder="123456"
              key={profileForm.key("address.postalCode")}
              {...profileForm.getInputProps("address.postalCode")}
            />
            <Textarea
              label="Address Line"
              placeholder="23, 15th Ave, NY"
              key={profileForm.key("address.addressLine")}
              {...profileForm.getInputProps("address.addressLine")}
            />
            <FileInput
              accept="application/pdf"
              label="Upload your resume"
              placeholder="Browse"
              clearable
              value={resumeFile}
              onChange={setResumeFile}
            />
            <Button variant="filled" type="submit">
              Submit
            </Button>
          </Flex>
        </form>
      </Flex>
    </Container>
  );
};

export default Homepage;
