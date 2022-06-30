import React from "react";
import SongList from "./components/SongList";
import useGetApiRequest from "./hooks/useGetApiRequest";
import { url } from "./services/api";
import styles from "./App.module.css";
function App() {
  const { songs, error, isLoaded } = useGetApiRequest(url);
  return (
    <div className={styles.site}>
      <SongList songs={songs} error={error} isLoaded={isLoaded} />
    </div>
  );
}

export default App;
