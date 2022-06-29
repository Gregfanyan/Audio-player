import React from "react";
import SongList from "./components/SongList";
import useApiRequest from "./hooks/useApiRequest";
import { url } from "./services/api";
import styles from "./App.module.css";
function App() {
  const { songs, error, isLoaded } = useApiRequest(url);
  console.log("songs", songs);
  return (
    <div className={styles.site}>
      <SongList songs={songs} error={error} isLoaded={isLoaded} />
    </div>
  );
}

export default App;
