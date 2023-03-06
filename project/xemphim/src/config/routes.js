const routes = {
  home: '/',
  movies: '/movies/',
  popular_movie: '/movies/popular',
  nowplaying_movie: '/movies/nowplaying',
  upcoming_movie: '/movies/upcoming',
  toprated_movie: '/movies/toprated',
  movieItem: '/movies/:idItem',

  tv: '/tv//*',
  popular_tv: '/tv/popular',
  nowplaying_tv: '/tv/nowplaying',
  upcoming_tv: '/tv/upcoming',
  toprated_tv: '/tv/toprated',
  favourite: '/favourite',

  // Accounts
  signup: '/signup',
  signin: '/signin',
  your_account: '/account-setting',
};

export default routes;
