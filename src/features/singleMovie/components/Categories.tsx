import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  CategoriesOption,
  CategoriesSection,
  Details,
} from "../../../assets/style/Categories.style";
import { useAppDispatch, useAppSelector } from "../../../common/hooks";
import { toggleDiscover } from "../../discoverMovies/discoverMoviesSlice";
import { toggleCast, toggleCategory } from "../singleMovieSlice";

type CategoriesProps = {
  id?: string;
};

const Categories: React.FC<CategoriesProps> = ({ id }) => {
  const { movieInfo, category, isCastOpen } = useAppSelector(
    (store) => store.singleMovie
  );
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

  const actors = credits?.cast?.filter(
    (cast) => cast.known_for_department === "Acting"
  );
  const director = credits?.crew.find((person) => person.job === "Director");
  const writers = credits?.crew.filter(
    (person) => person.department === "Writing"
  );
  const casting = credits?.crew.filter((person) => person.job === "Casting");
  const editors = credits?.crew.filter((person) => person.job === "Editor");
  const makeup = credits?.crew.filter(
    (person) => person.job === "Makeup Artist"
  );
  const sounds = credits?.crew.filter((person) => person.job.includes("Sound"));
  const costume = credits?.crew.filter(
    (person) => person.job === "Costume Design"
  );
  const stunts = credits?.crew.filter((person) => person.job === "Stunts");
  const cinematography = credits?.crew.filter(
    (person) => person.job === "Director of Photography"
  );
  const hairstyle = credits?.crew.filter(
    (person) => person.job === "Hairstylist"
  );
  const visualEffects = credits?.crew.filter(
    (person) => person.department === "Visual Effects"
  );
  const producers = credits?.crew.filter((person) => person.job === "Producer");

  useEffect(() => {
    dispatch(toggleCast(false));
    dispatch(toggleCategory("cast"));
  }, [id]);

  return (
    <CategoriesSection>
      <CategoriesOption>
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
      </CategoriesOption>
      {category === "genres" ? (
        <div>
          <div>
            <p>Genres</p>
            <ul>
              {genres?.map((genre) => (
                <li key={genre.id}>
                  <Link
                    to={`/discover/${genre?.id}/${genre?.name}`}
                    onClick={() => dispatch(toggleDiscover("genres"))}
                  >
                    {genre.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p>Themes</p>
            <ul>
              {keywords?.keywords?.map((keyword) => (
                <li key={keyword.id}>
                  <Link to={`/discover/${keyword?.id}/${keyword?.name}`}>
                    {keyword.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : category === "cast" ? (
        <div>
          <ul>
            {actors
              ?.slice(...(isCastOpen ? [0, actors.length] : [0, 20]))
              .map((cast) => (
                <li key={cast.id}>
                  <Link to={`/person/${cast?.id}/`}>{cast?.name}</Link>
                </li>
              ))}
            {actors?.length >= 25 ? (
              <li
                onClick={() => dispatch(toggleCast(!isCastOpen))}
                style={{ padding: "5px 10px" }}
              >
                {!isCastOpen ? "Show All..." : "Hide All..."}
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      ) : category === "crew" ? (
        <div>
          {director ? (
            <div>
              <p>Director</p>
              <ul>
                <li>
                  <Link to={`/person/${director?.id}/`}>{director?.name}</Link>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
          {writers.length ? (
            <div>
              <p>Writers</p>
              <ul>
                {writers?.map((writer) => (
                  <li key={writer.id}>
                    <Link to={`/person/${writer?.id}/`}>{writer.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}
          {producers.length ? (
            <div>
              <p>Producer</p>
              <ul>
                {producers.map((producer) => (
                  <li key={producer.id}>
                    <Link to={`/person/${producer?.id}/`}>{producer.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}
          {cinematography.length ? (
            <div>
              <p>Cinematography</p>
              <ul>
                {cinematography.map((person) => (
                  <li key={person.id}>
                    <Link to={`/person/${person?.id}/`}>{person.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}
          {casting.length ? (
            <div>
              <p>Casting</p>
              <ul>
                {casting?.map((person) => (
                  <li key={person.id}>
                    <Link to={`/person/${person?.id}/`}>{person.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}
          {editors.length ? (
            <div>
              <p>Editors</p>
              <ul>
                {editors.map((editor) => (
                  <li key={editor.id}>
                    <Link to={`/person/${editor?.id}/`}>{editor.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}
          {sounds.length ? (
            <div>
              <p>Sounds</p>
              <ul>
                {sounds.map((person) => (
                  <li key={person.id}>
                    <Link to={`/person/${person?.id}/`}>{person.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}
          {visualEffects.length ? (
            <div>
              <p>Visual Effects</p>
              <ul>
                {visualEffects.map((person) => (
                  <li key={person.id}>
                    <Link to={`/person/${person?.id}/`}>{person.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}
          {stunts.length ? (
            <div>
              <p>Stunts</p>
              <ul>
                {stunts.map((person) => (
                  <li key={person.id}>
                    <Link to={`/person/${person?.id}/`}>{person.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}
          {makeup.length ? (
            <div>
              <p>Makeup</p>
              <ul>
                {makeup.map((person) => (
                  <li key={person.id}>
                    <Link to={`/person/${person?.id}/`}>{person.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}
          {hairstyle.length ? (
            <div>
              <p>Hairstyling</p>
              <ul>
                {hairstyle.map((person) => (
                  <li key={person.id}>
                    <Link to={`/person/${person?.id}/`}>{person.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}
          {costume.length ? (
            <div>
              <p>Costume design</p>
              <ul>
                {costume.map((person) => (
                  <li key={person.id}>
                    <Link to={`/person/${person?.id}/`}>{person.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : category === "details" ? (
        <Details>
          <div>
            <p>Budget</p>
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
        </Details>
      ) : (
        ""
      )}
    </CategoriesSection>
  );
};

export default Categories;
