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

  const handlePlayPause = () => {
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
    >
      {isWaiting && <Spinner pos="absolute" color="white" />}
      <Video
        autoPlay={autoPlay}
        muted={muted}
        src={src}
        onClick={handlePlayPause}
        ref={videoRef}
      />
    </Flex>
  );
}

export default Player;
