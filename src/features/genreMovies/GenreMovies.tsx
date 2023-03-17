import { useEffect, useState } from "react";
import { getGenreMovies, toggleSort, toggleSortName } from "./genreMoviesSlice";
import { useAppDispatch, useAppSelector } from "../../common/hooks";
import { Link, useParams } from "react-router-dom";
import { setQuery } from "../navbar/navbarSlice";

const GenreMovies = () => {
  const [isSortOpen, setIsSortOpen] = useState<boolean>(false);
  const { name, id } = useParams();
  const { genreMovies, totalItems, totalPages, sortName } = useAppSelector(
    (store) => store.genreMovies
  );
  const dispatch = useAppDispatch();
  const posterUrl = "https://image.tmdb.org/t/p/w1280/";

  const changeSort = (e) => {
    dispatch(toggleSort(e));
    dispatch(getGenreMovies(id));
  };

  const changeSortName = (e) => {
    dispatch(toggleSortName(e.currentTarget.textContent));
    setIsSortOpen(false);
  };

  useEffect(() => {
    dispatch(getGenreMovies(id));
    dispatch(setQuery(""));
  }, [id]);

  return (
    <section className="genreMovie">
      <article className="sorting">
        <div>
          <h3>Films</h3>
          <div>
            <ul>
              <li onClick={() => setIsSortOpen(!isSortOpen)}>
                Sort by {sortName}
              </li>
              {isSortOpen ? (
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    changeSort(e.currentTarget.value);
                    changeSortName(e);
                    console.log(e.currentTarget.value);
                  }}
                >
                  <option value="popularity.desc">P</option>
                  <option value="vote_average.desc">B</option>
                  <option value="primary_release_date.desc">T</option>
                  <option value="revenue.desc">R</option>
                </select>
              ) : (
                // <ul>
                //   <li
                //     value="popularity.desc"
                //     onClick={(e) => {
                //       changeSort(e.currentTarget.value);
                //       changeSortName(e);
                //       console.log(e.currentTarget.nodeValue);
                //     }}
                //   >
                //     Popularity
                //   </li>
                //   <li
                //     value="vote_average.desc"
                //     onClick={(e) => {
                //       changeSort(e.currentTarget.value);
                //       changeSortName(e);
                //     }}
                //   >
                //     Average Rating
                //   </li>
                //   <li
                //     value="primary_release_date.desc"
                //     onClick={(e) => {
                //       changeSort(e.currentTarget.value);
                //       changeSortName(e);
                //     }}
                //   >
                //     Release date
                //   </li>
                //   <li
                //     value="original_title.desc"
                //     onClick={(e) => {
                //       changeSort(e.currentTarget.value);
                //       changeSortName(e);
                //     }}
                //   >
                //     Name
                //   </li>
                //   <li
                //     value="revenue.desc"
                //     onClick={(e) => {
                //       changeSort(e.currentTarget.value);
                //       changeSortName(e);
                //     }}
                //   >
                //     Revenue
                //   </li>
                // </ul>
                ""
              )}
            </ul>
          </div>
        </div>
        <div className="underline"></div>
        <p>
          There are{" "}
          {totalItems.toString().slice(0, 2) +
            "," +
            totalItems.toString().slice(2)}
          <span>{name}</span>
          films.
        </p>
      </article>
      <article>
        {genreMovies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <img src={posterUrl + movie.poster_path} alt="Poster" />
          </Link>
        ))}
      </article>
    </section>
  );
};

export default GenreMovies;
