import React, { FunctionComponent } from "react";
import usePostApiRequest from "../../hooks/usePostApiRequest";

const Like: FunctionComponent<{ id: string }> = ({ id }) => {
  const { likeSong } = usePostApiRequest();

  return <button onClick={() => likeSong(id)}>Like</button>;
};

export default Like;
