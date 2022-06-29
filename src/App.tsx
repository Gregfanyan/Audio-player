import React from "react";
import SongList from "./components/SongList";
import useApiRequest from "./hooks/useApiRequest";
import { url } from "./services/api";
function App() {
  const { songs, error, isLoaded } = useApiRequest(url);

  return (
    <div>
      <SongList
        songs={songs}
        error={error ? error : null}
        isLoaded={isLoaded}
      />
    </div>
  );
}

export default App;
