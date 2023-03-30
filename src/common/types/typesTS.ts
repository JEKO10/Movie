// trendingPeople

export type Trending = {
  id: number;
  title: string;
  name: string;
  profile_path: string;
  poster_path: string;
};

export type InitialTPeople = {
  isLoading: boolean;
  trendingPeople: Trending[];
};

export type InitialTMovies = {
  isLoading: boolean;
  trendingMovies: Trending[];
  time: string;
};

// person info

export type PersonInfo = {
  name: string;
  biography: string;
  birthday: string;
  deathday: string | null;
  gender: number;
  known_for_department: string;
  place_of_birth: string;
  profile_path: string;
  imdb_id: string;
};

export type InitialPersonInfo = {
  isLoading: boolean;
  personInfo: PersonInfo;
  isBioOpen: boolean;
};

// discover movies

type DiscoverMovies = {
  id: number;
  poster_path: string;
};

export type InitialDiscoverMovies = {
  isLoading: boolean;
  discoverMovies: DiscoverMovies[];
  totalPages: number;
  totalItems: number;
  page: number;
  sortBy: string;
  sortName: string;
  discover: string;
};

export type DiscoverPayload = {
  results: DiscoverMovies[];
  total_pages: number;
  total_results: number;
};
