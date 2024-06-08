import {
  Button,
  Container,
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
  const profileForm = useForm<IExtendedProfileFormValues>({
    mode: "uncontrolled",
    initialValues: initialFormValues,
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmitHandler = async (values: typeof profileForm.values) => {
    await chrome.storage.sync.set({
      profileData: JSON.stringify(profileForm.getValues()),
    });
  };

  useEffect(() => {
    (async () => {
      const data = await chrome.storage.sync.get("profileData");
      setInitialFormValues(JSON.parse(data.profileData));
      profileForm.setValues(JSON.parse(data.profileData));
      console.log({ profileData: data.profileData });
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
          <Button variant="filled" type="submit">
            Submit
          </Button>
        </form>
      </Flex>
    </Container>
  );
};

export default Homepage;
