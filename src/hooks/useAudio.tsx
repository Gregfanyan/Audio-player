import { useState, useEffect, useMemo } from "react";
import { songProps } from "../types/song.types";

type props = songProps & { audio: any; playing: boolean };

export const useMultiAudio = (songs: songProps[]) => {
  const playList = useMemo(() => {
    return songs.map((song) => {
      return {
        ...song,
        audio: new Audio(song.cover_image_path),
        playing: false,
      };
    });
  }, [songs]);

  const [players, setPlayers] = useState<props[]>([]);

  useEffect(() => {
    setPlayers(playList);
  }, [playList]);

  const toggle = (targetIndex: number) => () => {
    const newPlayers = [...players];
    const currentIndex = players.findIndex((p) => p.playing === true);
    if (currentIndex !== -1 && currentIndex !== targetIndex) {
      newPlayers[currentIndex].playing = false;
      newPlayers[targetIndex].playing = true;
    } else if (currentIndex !== -1) {
      newPlayers[targetIndex].playing = false;
    } else {
      newPlayers[targetIndex].playing = true;
    }
    setPlayers(newPlayers);
  };

  useEffect(() => {
    players.forEach((player, i) => {
      players[i].playing ? player.audio.play() : player.audio.pause();
    });
  }, [players]);

  useEffect(() => {
    players.forEach((player, i) => {
      player.audio.addEventListener("ended", () => {
        const newPlayers = [...players];
        newPlayers[i].playing = false;
        setPlayers(newPlayers);
      });
    });
    return () => {
      players.forEach((player, i) => {
        player.audio.removeEventListener("ended", () => {
          const newPlayers = [...players];
          newPlayers[i].playing = false;
          setPlayers(newPlayers);
        });
      });
    };
  }, [players]);

  return { players, toggle };
};
