import classNames from 'classnames/bind';
import style from './MovieDetail.module.scss';

import { faBookBookmark, faHeart, faPlay, faShare, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SlickMovie from '../../component/SlickMovie';
import MovieBox from '../MovieBox/MovieBox';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import TippyNote from '../TippyNote/TippyNote';
import Modal from '../Modal/Modal';
import { Responsive } from '../../Layout/DefaultLayout/DefaultLayout';
import LoadingEffect from '../effect/Loading/LoadingEffect';

const cx = classNames.bind(style);

function MovieDetail() {
  const [item, setItem] = useState([]);
  const [companie, setCompanies] = useState([]);
  const [cast, setCast] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [allCast, setAllCast] = useState(false);

  const [loading, setLoading] = useState(false);

  const { isMobile } = useContext(Responsive);

  const id = JSON.parse(localStorage.getItem('id_detail'));

  useEffect(() => {
    if (id === 0) {
      return;
    }

    const fetch = async () => {
      setLoading(true);
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=d61c25a37d3fdd1cd00f6a1ac7c3d267&append_to_response=videos`,
        )
        .then((res) => {
          setItem(res.data);
          setCompanies(res.data.production_companies);
        });

      await axios
        .get(`https://api.themoviedb.org/3/movie/${id}/casts?api_key=d61c25a37d3fdd1cd00f6a1ac7c3d267`)
        .then((res) => {
          setCast(res.data.cast);
        });

      await axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=d61c25a37d3fdd1cd00f6a1ac7c3d267&language=en-US
          `,
        )
        .then((res) => {
          const data = res.data.results;
          setTrailer(data.filter((element) => element.name === 'Official Trailer'));
        });

      await axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}/similar?api_key=d61c25a37d3fdd1cd00f6a1ac7c3d267&language=en-US&page=1`,
        )
        .then((res) => {
          setSimilar(res.data.results);
        });

      setLoading(false);
    };

    fetch();
  }, [id]);

  const showAllCast = () => {
    setAllCast(true);
  };

  return (
    <div className={cx('wrapper')}>
      {loading && <LoadingEffect />}
      <div className={cx('backdrop')}>
        <div className={cx('img')}>
          <img
            className={cx('back-drop-img')}
            alt="anh"
            src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
          />
          <div className={cx('alpha-bgc')} />
          {isMobile && (
            <div className={cx('poster-on-mobile')}>
              <img alt="anh" src={`https://image.tmdb.org/t/p/original${item.poster_path}`} />
            </div>
          )}
        </div>
      </div>
      <div className={cx('container')}>
        <div className={cx('poster')}>
          <img alt="anh" src={`https://image.tmdb.org/t/p/original${item.poster_path}`} />
        </div>

        <div className={cx('information')}>
          <div className={cx('title')}>
            <h3>{item.original_title}</h3>
            <span className={cx('tag-line')}>{item.tagline}</span>
            <span className={cx('release-date')}>{item.release_date}</span>
            <span className={cx('timer')}>1h30</span>
            <span className={cx('overview')}>OverView : {item.overview}</span>
          </div>

          <div className={cx('interactives')}>
            <div className={cx('interactives-button')}>
              <div className={cx('score')}>
                <span>{Math.floor(item.vote_average * 10)}%</span>
              </div>
              <TippyNote note="Like">
                <button className={cx('inter-btn', 'like-btn')}>
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </TippyNote>

              <TippyNote note="Add to your watchlist">
                <button className={cx('inter-btn', 'watch-list-btn')}>
                  <FontAwesomeIcon icon={faBookBookmark} />
                </button>
              </TippyNote>

              <TippyNote note="Rate for this movie">
                <button className={cx('inter-btn', 'rate-btn')}>
                  <FontAwesomeIcon icon={faStar} />
                </button>
              </TippyNote>
            </div>

            <div className={cx('watch-button')}>
              <button className={cx('watch-button--btn')}>
                <span className={cx('icon-play')}>
                  <FontAwesomeIcon icon={faPlay} />
                </span>
                <span className={cx('watch-text')}>Watch</span>
              </button>

              <div className={cx('share')}>
                <TippyNote note="Share This Movie" placement="right">
                  <button className={cx('inter-btn', 'share-btn')}>
                    <FontAwesomeIcon icon={faShare} />
                  </button>
                </TippyNote>
              </div>
            </div>
          </div>

          <div className={cx('content')}>
            <div className={cx('companies')}>
              <h3 className={cx('companies-title')}>Companies</h3>

              <ul className={cx('companies-list')}>
                {companie.map((comp, index) => (
                  <li id={comp.id} key={index} className={cx('companies-item')}>
                    <img
                      className={cx('logo-companies')}
                      alt="poster"
                      src={`https://image.tmdb.org/t/p/original${comp.logo_path}`}
                    />
                    <span className={cx('companies-name')}>{comp.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={cx('cast')}>
        <h3 className={cx('cast-title')}>Cast & Crew</h3>

        <div className={cx('cast-list')}>
          <SlickMovie quality={isMobile ? 2 : 5} slideScroll={3}>
            {cast
              .map((cst, index) => (
                <div id={cst.id} key={index} className={cx('cast-item')}>
                  <div className={cx('cast-card')}>
                    <img
                      className={cx('logo-cast')}
                      alt="poster"
                      src={`https://image.tmdb.org/t/p/original${cst.profile_path}`}
                    />

                    <div className={cx('info-cast')}>
                      <span className={cx('cast-name')}>
                        {cst.original_name} <br></br> {cst.known_for_department}
                      </span>
                      <span className={cx('cast-role')}>{cst.character}</span>
                    </div>
                  </div>
                </div>
              ))
              .splice(0, 15)}
          </SlickMovie>
        </div>

        <div className={cx('show-all-cast')}>
          <button className={cx('show-all-cast-btn')} onClick={showAllCast}>
            Show all
          </button>
          {allCast && (
            <Modal>
              <div className={cx('all-cast')}>
                {cast.map((ct, index) => (
                  <div className={cx('all-cast-list')} key={index}>
                    <div className={cx('info-cast--card')}>
                      <img
                        className={cx('avar-cast')}
                        alt="avar"
                        src={`https://image.tmdb.org/t/p/original${ct.profile_path}`}
                      ></img>
                      <span className={cx('full-name-cast')}>
                        FullName: <br></br>
                        {ct.original_name}
                      </span>
                    </div>
                    <span className={cx('name-character')}>
                      Character: <br></br>
                      {ct.character}
                    </span>
                  </div>
                ))}
              </div>
            </Modal>
          )}
        </div>
      </div>

      {trailer.length !== 0 && (
        <div className={cx('official-trailer')}>
          <h3 className={cx('trailer-title')}>Trailer</h3>
          {trailer.map((item, index) => (
            <iframe
              key={item.key}
              className={cx('video')}
              src={`https://www.youtube.com/embed/${item.key}`}
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ))}
        </div>
      )}

      <div className={cx('similar-movies')}>
        <h3 className={cx('similar-movies-title')}>Similar Movie</h3>
        <div className={cx('similar-list')}>
          <SlickMovie quality={isMobile ? 2 : 5} slideScroll={2}>
            {similar.map((simi, index) => (
              <MovieBox
                id={simi.id}
                key={index}
                className={cx('similar-item')}
                poster={`https://image.tmdb.org/t/p/original${simi.poster_path}`}
              />
            ))}
          </SlickMovie>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
