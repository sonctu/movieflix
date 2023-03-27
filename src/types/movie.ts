export interface IMovieItem {
  modified: { time: string };
  name: string;
  origin_name: string;
  poster_url: string;
  slug: string;
  thumb_url: string;
  year: number;
  _id: string;
}

export interface MovieData {
  items: IMovieItem[];
  pagination: {
    totalItems: number;
    totalItemsPerPage: number;
    currentPage: number;
    totalPages: number;
  };
  pathImage: string;
}

export interface Movie {
  episodes: {
    server_data: {
      filename: string;
      link_embed: string;
      link_m3u8: string;
      name: string;
      slug: string;
    }[];
    server_name: string;
  }[];
  movie: {
    actor: string[];
    category: { id: string; name: string; slug: string }[];
    chieurap: boolean;
    content: string;
    country: { id: string; name: string; slug: string }[];
    created: { time: string };
    director: string[];
    episode_current: string;
    episode_total: string;
    is_copyright: boolean;
    lang: string; // Vietsub
    modified: { time: string };
    name: string;
    notify: string;
    origin_name: string;
    poster_url: string;
    quality: string; // HD
    showtimes: string;
    slug: string;
    status: string; // completed
    sub_docquyen: boolean;
    thumb_url: string;
    time: string;
    trailer_url: string;
    type: string; // single
    view: number;
    year: number;
    _id: string;
  };
}
