import React from "react";
import { Button, Flex, Title, Text } from "@mantine/core";

const MainPopup = () => {
  const openHomePage = () => {
    chrome.tabs.create({
      active: true,
      url: "extension_home/index.html",
    });
  };
  return (
    <Flex
      w="100%"
      h="100%"
      gap="md"
      direction="column"
      align="center"
      justify="center"
    >
      <Text>Thank you for installing</Text>
      <Title>Autofill Extension</Title>
      <Button variant="filled" onClick={openHomePage}>
        Click here to get started
      </Button>
    </Flex>
  );
};

export default MainPopup;
