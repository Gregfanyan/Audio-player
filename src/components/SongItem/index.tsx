import React, { FunctionComponent } from "react";
import { songUpdatedProps } from "../../hooks/useAudio";
import Like from "../Like";
import styles from "./SongItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button";

const SongItem: FunctionComponent<{
  song: songUpdatedProps;
  toggle: any;
}> = ({ song, toggle }) => {
  return (
    <main className={styles.wrapper}>
      <Button style={{ margin: "0 auto" }} onClick={toggle}>
        <FontAwesomeIcon icon={song.playing ? "pause" : "play"} size="5x" />
      </Button>
      <h2>{song.name}</h2>
      <img src={song.cover_image_path} alt={song.description} />
      <Like id={song.id} />
    </main>
  );
};

export default SongItem;
