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
      .then((res) => console.log("res.status", res.status))
      .catch((err) => console.warn(err.response));
  };
  return { likeSong };
};

export default usePostApiRequest;
