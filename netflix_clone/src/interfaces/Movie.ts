export interface MovieInterface {
  id: string;
  type: string;
  primaryTitle: string;
  originalTitle: string;
  primaryImage: {
    url: string;
    width: number;
    height: number;
  };
  startYear: number;
  endYear?: number; // Optional since not all movies/shows have an end year
  runtimeSeconds?: number; // Optional as some entries might not have runtime
  genres: string[];
  rating?: {
    // Optional as some new shows might not have ratings yet
    aggregateRating: number;
    voteCount: number;
  };
  plot: string;
}

// You can also add a type for the movie data structure that contains the titles
export interface MovieDataInterface {
  titles: MovieInterface[];
  totalCount: number;
  nextPageToken?: string;
}
