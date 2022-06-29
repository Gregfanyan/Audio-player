export type songProps = {
  artist_name: string;
  bpm: number;
  comments: number;
  cover_image_aspect_ratio: string;
  cover_image_path: string;
  description: string;
  duration: number;
  faves: number;
  id: string;
  likes: number;
  music_file_mimetype: string;
  music_file_path: string;
  name: string;
  name_seo: string;
  plays: number;
  reposts: number;
  song_genres: genres[];
  song_release: Date;
  source_info: string;
};

type genres = {
  id: number;
  name: string;
};
