// navbar

type SearchData = {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
};

export type InitialNavbar = {
  isLoading: boolean;
  isSearchOpen: boolean;
  query: string;
  searchData: SearchData[];
};

// trendingPeople

export type Trending = {
  id: number;
  title: string;
  name: string;
  profile_path: string;
  poster_path: string;
};

export type InitialTrendPeople = {
  isLoading: boolean;
  trendingPeople: Trending[];
};

export type InitialTrendMovies = {
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

export type DiscoverMovies = {
  id: number;
  poster_path: string;
};

export type InitialPersonInfo = {
  isLoading: boolean;
  personInfo: PersonInfo;
  personMovies: DiscoverMovies[];
  isBioOpen: boolean;
  totalPages: number;
};

// discover movies

export type InitialDiscoverMovies = {
  isLoading: boolean;
  discoverMovies: DiscoverMovies[];
  totalPages: number;
  totalItems: number;
  sortBy: string;
  sortName: string;
  discover: string;
};

export type DiscoverPayload = {
  results: DiscoverMovies[];
  total_pages: number;
  total_results: number;
};

// singleMovie

type MovieCollection = {
  id: number;
  backdrop_path: string;
  name: string;
  poster_path: string;
};

type GenresKeywords = {
  id: number;
  name: string;
};

type MovieCompanies = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

type MovieCast = {
  id: number;
  character: string;
  known_for_department: string;
  name: string;
};

type MovieCrew = {
  id: number;
  department: string;
  job: string;
  name: string;
  profile_path: string;
};

type MovieCreditsType = {
  cast: MovieCast[];
  crew: MovieCrew[];
};

export type MovieInfoType = {
  title: string;
  tagline: string;
  backdrop_path: string;
  belongs_to_collection: MovieCollection;
  genres: GenresKeywords[];
  budget: number;
  imdb_id: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: MovieCompanies[];
  production_countries: [{ name: string }];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: [{ english_name: string }];
  vote_average: number;
  credits: MovieCreditsType;
  keywords: {
    keywords: GenresKeywords[];
  };
};
