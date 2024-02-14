import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function ElapsedTimeTracker(props) {
  console.log(props);
  const elapsedMin = Math.floor(props.elapsedSec / 60);
  const elapsedSec = Math.floor(props.elapsedSec % 60);

  const remainingMin = Math.floor(props.totalSec / 60);
  const remainingSec = Math.floor(props.totalSec % 60);

  return (
    <Flex
      align="center"
      className="elapsed-time-tracker"
      fontWeight="600"
      gap="4px"
      transition="500ms opacity"
      mt="-8px"
      p={0}
    >
      <Flex justify="end">
        <Text fontWeight={600} color="white">
          {elapsedMin}:
        </Text>
        <Text fontWeight={600} color="white">
          {elapsedSec.toString().padStart(2, "0")}
        </Text>
      </Flex>
      <Flex justify="end">
        <Text fontWeight={600} color="white">
          / {remainingMin}:
        </Text>
        <Text fontWeight={600} color="white">
          {remainingSec.toString().padStart(2, "0")}
        </Text>
      </Flex>
    </Flex>
  );
}
