/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { CheckIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";

const PlaybackRateControlButton = React.forwardRef((props, ref) => {
  const { onClick, playbackRate } = props;

  return (
    <div ref={ref}>
      <Flex
        className="playback-rate-control"
        alignItems="center"
        cursor="pointer"
        h="40px"
        justifyContent="center"
        rounded="12px"
        w="40px"
        _hover={{
          bg: "rgba(255, 255, 255, 0.08)",
        }}
        onClick={onClick}
        mt="-8px"
        transition="500ms opacity"
      >
        <Text
          color="white"
          fontWeight={700}
          letterSpacing="0.5px"
          pos="relative"
          top="-1px"
        >
          <span style={{ fontSize: "14px" }}>{playbackRate}</span>
          <span style={{ fontSize: "11px" }}>x</span>
          <ChevronDownIcon
            bottom="-1px"
            color="white"
            marginLeft="-1px"
            marginRight="-4px"
            opacity="0.5"
            pos="relative"
            width="12px"
            stroke="white"
          />
        </Text>
      </Flex>
    </div>
  );
});

function PlaybackRateControl(props) {
  const { playbackRate, setPlaybackRate } = props;

  return (
    <Menu autoSelect={false} placement="top-start">
      <MenuButton as={PlaybackRateControlButton} playbackRate={playbackRate} />
      <MenuList
        bg="#1D253F"
        border="none"
        pl="8px"
        pr="8px"
        minW="50px"
        zIndex="2"
      >
        <MenuGroup
          color="white"
          fontSize="12px"
          fontWeight="400"
          ml="12px"
          title="Playback Speed"
        >
          {[1, 1.5, 2].map((rate) => (
            <MenuItem
              height="40px"
              justifyContent="space-between"
              key={`playbackRate_${rate}`}
              onClick={() => {
                if (playbackRate === rate) return;
                setPlaybackRate(rate);
              }}
              rounded="8px"
              _hover={{
                bg: "rgba(0, 0, 0, 0.4)",
              }}
              _focus={{
                bg: "lightblue",
              }}
            >
              <Text fontWeight={800} size="sm" color="black">
                {rate.toFixed(1)}x
              </Text>
              {playbackRate === rate && (
                <CheckIcon width="15px" height="11px" fill="white" />
              )}
            </MenuItem>
          ))}
        </MenuGroup>
      </MenuList>
    </Menu>
  );
}

export default React.memo(PlaybackRateControl);
