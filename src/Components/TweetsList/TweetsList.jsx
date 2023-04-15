import { useState } from "react";
import TweetsItem from "../TweetsItem/TweetsItem"
import useFetch from "../../Utilities/useFetch";
import { baseUrl } from "../../Utilities/url.js";
import { Dna } from "react-loader-spinner";

import css from './TweetsList.module.css'

const TweetsList = () => {
   const [page, setPage] = useState(1);
    const [perPage] = useState(8);
    
     const { users, isLoading, error } = useFetch(baseUrl, {
       page,
       perPage,
     });
    
    return (
      <ul className={css.tweetsList}>
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
        {users.map(({ id, user, tweets, followers, avatar }) => (
          <TweetsItem
            key={id}
            user={user}
            tweets={tweets}
            followers={followers}
            avatar={avatar}
          />
        ))}
      </ul>
    );
}
 
export default TweetsList;