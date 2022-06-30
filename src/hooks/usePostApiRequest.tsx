import axios from "axios";
import { apiKey, postUrl } from "../services/api";
const usePostApiRequest = () => {
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
      .then((res) => res)
      .catch((err) => console.warn(err.response));
  };
  return { likeSong };
};

export default usePostApiRequest;
