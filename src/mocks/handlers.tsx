import { rest } from "msw";
import { url } from "../services/api";
export const handlers = [
  rest.get(url, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: "f93b2ffd",
          name: "Lorem",
          likes: 2,
          description: "Lorem Ipsum",
          cover_image_path:
            "https://dz2l6nhikl0ua.cloudfront.net/assets/cover_image/f92cea72-cafe-11ec-ae5d-022ed69f96e6.jpeg?cb=20220503183459",
          cover_image_aspect_ratio: "700:700",
          music_file_path:
            "https://dz2l6nhikl0ua.cloudfront.net/assets/music_file/f6d7a1c6-cafe-11ec-ae5d-022ed69f96e6.m4a?cb=20220503183455",
          music_file_mimetype: "audio/mp4",
          song_genres: [
            {
              id: 1,
              name: "Movie",
            },
          ],
        },
      ])
    );
  }),
];
