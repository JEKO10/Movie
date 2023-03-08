import { toggleCategory } from "../singleMovieSlice";
import { useAppDispatch, useAppSelector } from "../../../common/hooks";

const Categories = () => {
  const { movieInfo, category } = useAppSelector((store) => store.singleMovie);
  const {
    genres,
    budget,
    popularity,
    production_companies,
    production_countries,
    revenue,
    spoken_languages,
    vote_average,
    keywords,
    credits,
  } = movieInfo;
  const dispatch = useAppDispatch();

  return (
    <article className="categories">
      <ul className="options">
        <li
          onClick={(e) => {
            dispatch(toggleCategory(e.currentTarget.textContent));
          }}
          className={category === "cast" ? "active" : ""}
        >
          cast
        </li>
        <li
          onClick={(e) => {
            dispatch(toggleCategory(e.currentTarget.textContent));
          }}
          className={category === "crew" ? "active" : ""}
        >
          crew
        </li>
        <li
          onClick={(e) => {
            dispatch(toggleCategory(e.currentTarget.textContent));
          }}
          className={category === "genres" ? "active" : ""}
        >
          genres
        </li>
        <li
          onClick={(e) => {
            dispatch(toggleCategory(e.currentTarget.textContent));
          }}
          className={category === "details" ? "active" : ""}
        >
          details
        </li>
      </ul>
      {category === "genres" ? (
        <div>
          <div>
            <p>Genres</p>
            <ul>
              {genres?.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <p>Themes</p>
            <ul>
              {keywords?.keywords?.map((keyword) => (
                <li key={keyword.id}>{keyword.name}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : category === "cast" ? (
        <div>
          <ul>
            {credits?.cast?.map((cast) => (
              <li key={cast.id}>{cast.name}</li>
            ))}
          </ul>
        </div>
      ) : category === "crew" ? (
        <div>
          <ul>
            {credits?.crew?.map((crew) => (
              <li key={crew.id}>{crew.name}</li>
            ))}
          </ul>
        </div>
      ) : category === "details" ? (
        <div className="details">
          <div>
            <p>Budget</p>
            <div className="line"></div>
            <ul>
              <li>{budget} $</li>
            </ul>
          </div>
          <div>
            <p>Revenue</p>
            <ul>
              <li>{revenue} $</li>
            </ul>
          </div>
          <div>
            <p>Languages</p>
            <ul>
              {spoken_languages.map((language) => (
                <li key={language.english_name}>{language.english_name}</li>
              ))}
            </ul>
          </div>
          <div>
            <p>Popularity</p>
            <ul>
              <li>{popularity}</li>
            </ul>
          </div>
          <div>
            <p>Rating</p>
            <ul>
              <li>{vote_average} / 10</li>
            </ul>
          </div>
          <div>
            {production_countries.length > 1 ? (
              <p>Countries</p>
            ) : (
              <p>Country</p>
            )}
            <ul>
              {production_countries.map((country) => (
                <li key={country.name}>{country.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <p>Production</p>
            <ul>
              {production_companies.map((production) => (
                <li key={production.id}>{production.name}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </article>
  );
};

export default Categories;
