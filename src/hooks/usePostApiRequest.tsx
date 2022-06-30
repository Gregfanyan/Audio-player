import axios from "axios";

const usePostApiRequest = () => {
  const likeSong = async (id: string) => {
    await axios
      .post(
        `https://api-stg.jam-community.com/interact/like?apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8`,
        new URLSearchParams({
          id: id,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => res.status)
      .catch((err) => console.warn(err.response));
  };
  return { likeSong };
};

export default usePostApiRequest;
