import React, { FunctionComponent } from "react";
import { songProps } from "../../types/song.types";

const SongItem: FunctionComponent<{ song: songProps }> = ({ song }) => {
  return <div>{song.name}</div>;
};

export default SongItem;
