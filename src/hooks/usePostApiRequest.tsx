import React from "react";
import axios from "axios";

const usePostApiRequest = () => {
  const postUrl = process.env.REACT_APP_POST_URL;
  const apiKey = process.env.REACT_APP_API_kEY;
  const [isLiked, setIsLiked] = React.useState<boolean>(false);
  const likeSong = async (id: string) => {
    await axios
      .post(
        `${postUrl}?apikey=${apiKey}`,
        new URLSearchParams({
          id,
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
