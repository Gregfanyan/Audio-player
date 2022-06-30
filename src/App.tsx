import React from "react";
import SongList from "./components/SongList";
import useGetApiRequest from "./hooks/useGetApiRequest";
import { url } from "./services/api";
import Header from "./components/Header";
import styles from "./App.module.css";

function App() {
  const { songs, error, isLoaded } = useGetApiRequest(url);
  console.log("songs", songs);
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SongList songs={songs} error={error} isLoaded={isLoaded} />
      </div>
    </>
  );
}

export default App;
