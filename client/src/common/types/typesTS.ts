// navbar

export type SearchData = {
  id: number;
  poster_path: string;
  profile_path: string;
  title?: string;
  name: string;
  release_date?: string;
  media_type: string;
};

export type InitialNavbar = {
  inputValue: string;
  query: string;
  searchData: SearchData[];
  selectedMovieId: number;
  isModalOpen: boolean;
  isProfileOpen: boolean;
  isLogOpen: boolean;
  isMovieModalOpen: boolean;
  isLogInOpen: boolean;
  isSignUpOpen: boolean;
  category: string;
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

export type MovieCollection = {
  id: number;
  name: string;
  poster_path: string;
  overview: string;
  parts: DiscoverMovies[];
};

export type InitialDiscoverMovies = {
  isLoading: boolean;
  discoverMovies: DiscoverMovies[] | undefined;
  collection: MovieCollection;
  totalPages: number | undefined;
  totalItems: number | undefined;
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

export type InitialSingleMovie = {
  isLoading: boolean;
  movieInfo: MovieInfoType;
  isPosterOpen: boolean;
  category: string | null;
  isCastOpen: boolean;
  isReview: boolean;
  isLists: boolean;
  isShare: boolean;
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

// profile

export type RegisterInfo = {
  username: string;
  name: string;
  lastName: string;
  email: string;
  bio: string;
};

export type UserData = {
  id: number;
  username: string;
  email: string;
};

export type InitialProfile = {
  registerInfo: RegisterInfo;
};

// reviews & lists

export type ReviewsResult = {
  author_details: {
    username: string;
    avatar_path: string;
    rating: number;
  };
  content: string;
  created_at: string;
  id: string;
};

export type InitialReviews = {
  isLoading: boolean;
  reviews: ReviewsResult[];
};

export type ListsResult = {
  description: string;
  id: number;
  item_count: number;
  iso_639_1: string;
  name: string;
};

export type InitialLists = {
  isLoading: boolean;
  lists: ListsResult[];
};
