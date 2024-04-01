const key = 'b32764e8cd0c639022ec41ad69b3226b';

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`, 
  requestTrending: `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`,
  requestHorror: `https://api.themoviedb.org/3/keyword/keyword_id/movies?api_key=${key}`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
}

export default requests