import React, { FunctionComponent } from "react";

const SongItem: FunctionComponent<{ song: any }> = ({ song }) => {
  return <div>{song.name}</div>;
};

export default SongItem;
