import React from "react";
import SongList from "./components/SongList";
import useApiRequest from "./hooks/useApiRequest";

function App() {
  const url = "https://api-stg.jam-community.com/song/trending";
  const { songs, error, isLoaded } = useApiRequest(url);
  console.log("songs", songs);
  return (
    <div>
      <SongList songs={songs} />
    </div>
  );
}

export default App;
