import React, { FunctionComponent } from "react";
import { songProps } from "../../types/song.types";
import styles from './SongItem.module.css'
const SongItem: FunctionComponent<{ song: songProps }> = ({ song }) => {
  return <div
  className={styles.container}
  >{song.name}</div>;
};

export default SongItem;
