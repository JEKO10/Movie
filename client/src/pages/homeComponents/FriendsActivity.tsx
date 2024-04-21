import React from "react";
import { FaCommentAlt, FaHeart } from "react-icons/fa";

import poster from "../../assets/images/poster.png";
import poster1 from "../../assets/images/poster1.jpg";
import poster2 from "../../assets/images/poster2.jpg";
import poster3 from "../../assets/images/poster3.jpg";
import { FriendsActivity as Container } from "./Home.style";

const FriendsActivity = () => {
  return (
    <Container>
      <h2>New from friends</h2>
      <article>
        <div>
          <ul>
            <li>
              <img src={poster} alt="moviePoster" />
            </li>
            <li>
              <img src={poster1} alt="moviePoster" />
            </li>
            <li>
              <img src={poster2} alt="moviePoster" />
            </li>
            <li>
              <img src={poster3} alt="moviePoster" />
            </li>
          </ul>
          <div>
            <p>tadija</p>
            <span>
              <FaHeart />
              <FaCommentAlt />
            </span>
          </div>
        </div>
        <div>
          <ul>
            <li>
              <img src={poster} alt="moviePoster" />
            </li>
            <li>
              <img src={poster1} alt="moviePoster" />
            </li>
            <li>
              <img src={poster2} alt="moviePoster" />
            </li>
            <li>
              <img src={poster3} alt="moviePoster" />
            </li>
          </ul>
          <div>
            <p>JEKO</p>
            <span>
              <FaHeart />
              <FaCommentAlt />
            </span>
          </div>
        </div>
        <div>
          <ul>
            <li>
              <img src={poster} alt="moviePoster" />
            </li>
            <li>
              <img src={poster1} alt="moviePoster" />
            </li>
            <li>
              <img src={poster2} alt="moviePoster" />
            </li>
            <li>
              <img src={poster3} alt="moviePoster" />
            </li>
          </ul>
          <div>
            <p>andrija</p>
            <span>
              <FaHeart />
              <FaCommentAlt />
            </span>
          </div>
        </div>
      </article>
    </Container>
  );
};

export default FriendsActivity;
