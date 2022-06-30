import React, { FunctionComponent } from "react";
import usePostApiRequest from "../../hooks/usePostApiRequest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button";
const Like: FunctionComponent<{ id: string }> = ({ id }) => {
  const { likeSong } = usePostApiRequest();

  return (
    <Button onClick={() => likeSong(id)}>
      <FontAwesomeIcon icon="heart" size="5x" />
    </Button>
  );
};

export default Like;
