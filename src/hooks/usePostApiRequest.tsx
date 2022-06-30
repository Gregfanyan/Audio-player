import React from "react";
import axios from "axios";
import { apiKey, postUrl } from "../services/api";

const usePostApiRequest = () => {
  const [isLiked, setIsLiked] = React.useState<boolean>(false);
  const likeSong = async (id: string) => {
    await axios
      .post(
        `${postUrl}?apikey=${apiKey}`,
        new URLSearchParams({
          id: id,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        console.log("res", res);
        setIsLiked(true);
      })
      .catch((err) => console.warn(err.response));
  };
  return { likeSong, isLiked };
};

export default usePostApiRequest;
