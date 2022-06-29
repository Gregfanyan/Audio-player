import React, { FunctionComponent } from "react";
import { songProps } from "../../types/song.types";
import SongItem from "../SongItem";

const SongList: FunctionComponent<{ songs: songProps[] }> = ({ songs }) => {
  return (
    <div>
      {songs && songs.map((song) => <SongItem key={song.id} song={song} />)}
    </div>
  );
};

export default SongList;
