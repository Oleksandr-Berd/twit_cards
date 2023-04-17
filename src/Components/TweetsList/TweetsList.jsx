import { useState } from "react";
import TweetsItem from "../TweetsItem/TweetsItem";
import useFetch from "../../Utilities/useFetch";
import { baseUrl } from "../../Utilities/url.js";
import { Dna } from "react-loader-spinner";

import css from "./TweetsList.module.css";

const TweetsList = ({filter}) => {
  const [page, setPage] = useState(1);
  const [perPage] = useState(9);

  const { users, isLoading, error } = useFetch(baseUrl, {
    page,
    perPage,
  }, filter);
    
     const shouldLoadingButton =
       users.length > 0 && users.length >= perPage && !isLoading;
    
    const handleLoadMore = (evt) => {
       setPage((prevPage) => prevPage + 1);
  }


  return (
    <>
      <ul className={css.tweetsList}>
        {error && <div>{error}</div>}
        {isLoading && (
          <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        )}
        {users.map(({ id, user, tweets, followers, avatar, isFollowing }) => (
          <TweetsItem
            key={id}
            id={id}
            user={user}
            tweets={tweets}
            followers={followers}
            avatar={avatar}
            isFollowing={isFollowing}
          />
        ))}
      </ul>
      {shouldLoadingButton && (
        <button className={css.btnLoadMore} onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </>
  );
};

export default TweetsList;
