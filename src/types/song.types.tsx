export type songProps = {
  cover_image_path: string;
  description: string;
  id: string;
  likes: number;
  music_file_path: string;
  name: string;
  song_genres: genres[];
};

type genres = {
  id: number;
  name: string;
};
