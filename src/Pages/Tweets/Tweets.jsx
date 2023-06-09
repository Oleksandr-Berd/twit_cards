import { NavLink, useLocation } from "react-router-dom";
import TweetsList from "../../Components/TweetsList/TweetsList";
import css from "./Tweets.module.css"
import { useState } from "react";

const Tweets = () => {
  const location = useLocation();
  const [filter, setFilter] = useState("Show all")

   const changeFilter = (evt) => {
     setFilter(evt.currentTarget.value);
   };

    return (
      <div>
        <NavLink to="/home" state={{ from: location }} className={css.btnBack}>
          Go back
        </NavLink>
        <form action="" className={css.form}>
          <label className={css.label} htmlFor="filter">
            Choose your tweets
          </label>

          <select
            className={css.datalist}
            id="filters"
            onChange={changeFilter}
            defaultValue="Show all"
          >
            <option value="Show all">Show all</option>
            <option value="Follow">Follow</option>
            <option value="Following">Following</option>
          </select>
        </form>
        <TweetsList filter={filter} />
      </div>
    );
}
 
export default Tweets;