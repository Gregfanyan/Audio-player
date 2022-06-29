import React, { FunctionComponent } from "react";
import SongItem from "../SongItem";

const SongList: FunctionComponent<{ songs: any }> = ({songs}) => {
  return (
    <div>

{songs && songs.map((song:any)=>(
    <SongItem key={song.id} song={song} />

))}

    </div>
  );
};

export default SongList;
