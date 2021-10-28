import variables from "../../helpers/variables";

const { TMDB_API_KEY, BASE_URL } = variables;

export const primaryMovieList = [
  {
    heading: "Upcoming in Theatres",
    url: `${BASE_URL}movie/upcoming?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
  },
  {
    heading: "Popular Now",
    url: `${BASE_URL}movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
  },
];

export const movieList = [
  {
    heading: `Action Thriller`,
    url: `${BASE_URL}discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=28%2C53&page=1`,
  },

  {
    heading: "Romantic Movies",
    url: `${BASE_URL}discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=10749&page=1`,
  },
  {
    heading: `Sci-Fi Movies`,
    url: `${BASE_URL}discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=878&page=1`,
  },
  {
    heading: "Western Movies",
    url: `${BASE_URL}discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=37&page=1`,
  },
  {
    heading: "Action & Adventure",
    url: `${BASE_URL}discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=28%2C12&page=1`,
  },
  {
    heading: "Horror",
    url: `${BASE_URL}discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=27&page=1`,
  },
  {
    heading: "Romantic Comedy",
    url: `${BASE_URL}discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=10749%2C35&page=1`,
  },
  {
    heading: "Documentaries",
    url: `${BASE_URL}discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=99&page=1`,
  },
  {
    heading: "Family Movies",
    url: `${BASE_URL}discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=10751&page=1`,
  },
  {
    heading: "Animation",
    url: `${BASE_URL}discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=16&page=1`,
  },
  {
    heading: "Comedy Movie",
    url: `${BASE_URL}discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=35&page=1`,
  },
  {
    heading: "Drama",
    url: `${BASE_URL}discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=18&page=1`,
  },
  {
    heading: "Fantasy Movies",
    url: `${BASE_URL}discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=14&page=1`,
  },
  {
    heading: "Music & Romance",
    url: `${BASE_URL}discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=10402%2C10749&page=1`,
  },
  {
    heading: "Action Movies",
    url: `${BASE_URL}discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=28&page=1`,
  },
  {
    heading: "Adventure",
    url: `${BASE_URL}discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=12&page=1`,
  },
  {
    heading: "Crime Movies",
    url: `${BASE_URL}discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=80&page=1`,
  },
  {
    heading: "History",
    url: `${BASE_URL}discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=36&page=1`,
  },
  {
    heading: "Music",
    url: `${BASE_URL}discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=10402&page=1`,
  },
  {
    heading: "Mystery Movies",
    url: `${BASE_URL}discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=9648&page=1`,
  },
  {
    heading: "Thriller Movies",
    url: `${BASE_URL}discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=53&page=1`,
  },
  {
    heading: "War Movies",
    url: `${BASE_URL}discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=10752&page=1`,
  },
];
