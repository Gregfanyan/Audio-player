import React from "react";
import SongList from "./components/SongList";
import useGetApiRequest from "./hooks/useGetApiRequest";

import Header from "./components/Header";
import styles from "./App.module.css";

function App() {
  const url = process.env.REACT_APP_URL;
  const { songs, error, isLoaded } = useGetApiRequest(url as string);
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
