import { Spinner } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Video = styled.video`
  flex-shrink: 1;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

function Player({ src, autoPlay = false, muted = false }) {
  const [isWaiting, setIsWaiting] = useState(false);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [durationSec, setDurationSec] = useState(1);
  const [elapsedSec, setElapsedSec] = useState(1);

  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const bufferRef = useRef(null);

  console.log(videoRef.current);

  useEffect(() => {
    if (!videoRef.current) return;

    const element = videoRef.current;

    const onWaiting = () => {
      if (isPlaying) setIsPlaying(false);
      setIsWaiting(true);
    };

    const onPlay = () => {
      if (isWaiting) setIsWaiting(false);
      setIsPlaying(true);
    };

    const onPause = () => {
      setIsPlaying(false);
      setIsWaiting(false);
    };

    element.addEventListener("play", onPlay);
    element.addEventListener("playing", onPlay);
    element.addEventListener("pause", onPause);
    element.addEventListener("waiting", onWaiting);
    setIsWaiting(true);
    // clear once unmounted
    return () => {
      element.removeEventListener("play", onPlay);
      element.removeEventListener("playing", onPlay);
    };
  }, [videoRef.current]);

  const handlePlayPauseClick = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };
  return (
    <Flex
      flexDir="column"
      cursor="pointer"
      align="center"
      justify="center"
      pos="relative"
      rounded="10px"
      overflow="hidden"
      _hover={{
        ".timeline-container": {
          opacity: 1,
        },
      }}
    >
      {isWaiting && <Spinner pos="absolute" color="white" />}
      <Video
        autoPlay={autoPlay}
        muted={muted}
        src={src}
        onClick={handlePlayPauseClick}
        ref={videoRef}
      />

      <Flex
        w="full"
        z-index="10"
        h="100px"
        bg="linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))"
        pos="absolute"
        opacity={1}
        transition="opacity 0.5s linear"
        className="timeline-container"
        left={0}
        bottom={0}
        align="flex-end"
        px="1rem"
      >
        <Flex flexDir="column" w="full" align="center">
          {/* {timeline} */}
          <Flex
            w="full"
            transition="height 0.1s linear"
            className="timeline"
            h="4px"
            mb="0.5rem"
            rounded="10px"
            bg="rgba(193, 193, 193, 0.5)"
            _hover={{ height: "5px" }}
            overflow="hidden"
            // onClick={(e) => {
            //   const { left, width } = e.currentTarget.getBoundingClientRect();
            //   const clickedPos = (e.clientX - left) / width;
            //   seekToPosition(clickedPos);
            // }}
          >
            {/* {} */}
            <Flex pos="relative" w="full" h="full">
              {/* {playback prohress} */}
              <Flex
                h="full"
                className="play-progress"
                bg="#0CAADC"
                zIndex={1}
                ref={progressRef}
              />
              {/* {buffer progress} */}
              <Flex
                pos="absolute"
                h="full"
                className="buffer-progress"
                bg="#FDFFFC"
                ref={bufferRef}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Player;
