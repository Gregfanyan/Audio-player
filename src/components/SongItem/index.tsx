import React, { FunctionComponent } from "react";
import { songUpdatedProps } from "../../hooks/useAudio";
import styles from "./SongItem.module.css";

const SongItem: FunctionComponent<{
  song: songUpdatedProps;
  toggle: any;
}> = ({ song, toggle }) => {
  return (
    <main className={styles.wrapper}>
      <div>{song.name}</div>
      <button onClick={toggle}>{song.playing ? "Pause" : "Play"}</button>
      <img src={song.cover_image_path} alt={song.description} />
    </main>
  );
};

export default SongItem;
