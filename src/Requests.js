// VITE_API_KEY

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}`, 
  requestTrending: `https://api.themoviedb.org/3/trending/movie/day?api_key=${import.meta.env.VITE_API_KEY}`,
  requestHorror: `https://api.themoviedb.org/3/discover/tv?api_key=${import.meta.env.VITE_API_KEY}`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}`,
}

export default requests