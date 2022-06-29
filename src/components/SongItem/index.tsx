import React, { FunctionComponent } from "react";
import { songProps } from "../../types/song.types";
import styles from "./SongItem.module.css";
const SongItem: FunctionComponent<{ song: songProps }> = ({ song }) => {
  return (
    <main className={styles.wrapper}>
      <div>{song.name}</div>
      <button>Play/Pause</button>
      <img src={song.cover_image_path} alt={song.description} />
    </main>
  );
};

export default SongItem;
