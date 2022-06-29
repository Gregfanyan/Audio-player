import React, { FunctionComponent } from "react";
import { useAudio } from "../../hooks/useAudio";
import { songProps } from "../../types/song.types";
import styles from "./SongItem.module.css";
const SongItem: FunctionComponent<{ song: songProps }> = ({ song }) => {
  const { playing, toggle } = useAudio(song.music_file_path);
  return (
    <main className={styles.wrapper}>
      <div>{song.name}</div>
      <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
      <img src={song.cover_image_path} alt={song.description} />
    </main>
  );
};

export default SongItem;
