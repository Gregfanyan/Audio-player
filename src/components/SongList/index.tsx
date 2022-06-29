import React, { FunctionComponent } from "react";
import { songProps } from "../../types/song.types";
import SongItem from "../SongItem";

const SongList: FunctionComponent<{
  songs: songProps[];
  error: string | null;
  isLoaded: boolean;
}> = ({ songs, error, isLoaded }) => {
  if (error !== null) {
    return <div> {error}</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {songs && songs.map((song) => <SongItem key={song.id} song={song} />)}
    </div>
  );
};

export default SongList;
