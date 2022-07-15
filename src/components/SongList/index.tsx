import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMultiAudio } from "../../hooks/useAudio";
import { songProps } from "../../types/song.types";
import SongItem from "../SongItem";
import styles from "./SongList.module.css";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const SongList: FunctionComponent<{
  songs: songProps[];
  error: null | string;
  isLoaded: boolean;
}> = ({ songs, error, isLoaded }) => {
  const { players, toggle } = useMultiAudio(songs);
  if (error !== null) {
    return <div> {error}</div>;
  }
  if (!isLoaded) {
    return (
      <FontAwesomeIcon className={styles.spinner} icon={faSpinner} size="5x" />
    );
  }
  return (
    <main className={styles.wrapper}>
      {players &&
        players.map((song, i) => (
          <SongItem key={song.id} song={song} toggle={toggle(i)} />
        ))}
    </main>
  );
};

export default SongList;
