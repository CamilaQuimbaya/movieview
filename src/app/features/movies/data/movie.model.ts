export interface Movie {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  poster_path: string | null;
  overview?: string;

}

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
