import { NavLink, useLocation } from "react-router-dom";
import TweetsList from "../../Components/TweetsList/TweetsList";
import css from "./Tweets.module.css"

const Tweets = () => {
  const location = useLocation();

    return (
      <div>
        <NavLink to="/home" state={{ from: location }} className={css.btnBack}>
          Go back
        </NavLink>
        <TweetsList />
      </div>
    );
}
 
export default Tweets;