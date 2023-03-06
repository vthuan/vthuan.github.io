import { BrowserRouter, Routes, Route } from 'react-router-dom';
import config from './config';
import DefaultLayout from './Layout/DefaultLayout/DefaultLayout';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import LoadingEffect from './component/effect/Loading/LoadingEffect';

// Movie
import NowPlaying from './pages/Movies/NowPlaying/NowPlaying';
import Popular from './pages/Movies/Popular/Popular';
import TopRated from './pages/Movies/TopRated/TopRated';
import UpComing from './pages/Movies/UpComing/UpComing';
import MovieDetail from './component/MovieDetail/MovieDetail';

// TV
import TvShow from './pages/TvShow/TvShow';
import TvPopular from './pages/TvShow/Popular/Popular';
import TvToprated from './pages/TvShow/TopRated/TopRated';
import SignUp from './accounts/SignUp/SignUp';
import SignIn from './accounts/SignIn/SignIn';
import Account from './accounts/Account/Account';
import { useState } from 'react';
import Favourite from './pages/Favourite/Favourite';

function App() {
  const isLogin = JSON.parse(localStorage.getItem('login'));

  return (
    <div className="App">
      <BrowserRouter basename="/">
        <DefaultLayout>
          <Routes>
            <Route exact path={config.routes.home} element={<Home />} />
            <Route exact path={config.routes.movies} element={<Movies />}></Route>
            <Route exact path={config.routes.movieItem} element={<MovieDetail />} />
            <Route exact path={config.routes.signup} element={<SignUp />} />
            <Route exact path={config.routes.signin} element={<SignIn />} />
            <Route
              exact
              path={config.routes.favourite}
              element={isLogin ? <Favourite /> : 'You need Login to save Favourite'}
            />

            {/* Movie Tab */}
            <Route
              exact
              path={config.routes.popular_movie}
              element={
                <Movies>
                  <Popular />
                </Movies>
              }
            />
            <Route
              exact
              path={config.routes.nowplaying_movie}
              element={
                <Movies>
                  <NowPlaying />
                </Movies>
              }
            />
            <Route
              exact
              path={config.routes.upcoming_movie}
              element={
                <Movies>
                  <UpComing />
                </Movies>
              }
            />
            <Route
              exact
              path={config.routes.toprated_movie}
              element={
                <Movies>
                  <TopRated />
                </Movies>
              }
            />
            {/* Movie Tab */}

            <Route exact path={config.routes.tv} element={<TvShow />} />

            {/* Tv Show */}
            <Route
              exact
              path={config.routes.popular_tv}
              element={
                <TvShow>
                  <TvPopular />
                </TvShow>
              }
            />
            <Route
              exact
              path={config.routes.nowplaying_tv}
              element={
                <TvShow>
                  <NowPlaying />
                </TvShow>
              }
            />
            <Route
              exact
              path={config.routes.upcoming_tv}
              element={
                <TvShow>
                  <UpComing />
                </TvShow>
              }
            />
            <Route
              exact
              path={config.routes.toprated_tv}
              element={
                <TvShow>
                  <TvToprated />
                </TvShow>
              }
            />
            {/* Tv Show */}

            {/* Account */}
            <Route exact path={config.routes.your_account} element={<Account />} />
          </Routes>
        </DefaultLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
