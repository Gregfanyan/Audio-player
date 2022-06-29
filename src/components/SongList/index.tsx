import React, { FunctionComponent } from "react";
import { useMultiAudio } from "../../hooks/useAudio";
import { songProps } from "../../types/song.types";
import SongItem from "../SongItem";
import styles from "./SongList.module.css";
const SongList: FunctionComponent<{
  songs: songProps[];
  error: any;
  isLoaded: boolean;
}> = ({ songs, error, isLoaded }) => {
  const { players, toggle } = useMultiAudio(songs);

  if (error !== null) {
    return <div> {error}</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <main className={styles.wrapper}>
      {players && players.map((song) => <SongItem key={song.id} song={song} />)}
    </main>
  );
};

export default SongList;
