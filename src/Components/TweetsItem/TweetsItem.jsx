import css from "./TweetsItem.module.css";
import imgSymbols from "../../Utilities/images/symbols.png";
import eclipse from "../../Utilities/images/Ellipse 1 (Stroke).png";
import line from "../../Utilities/images/Rectangle.png"
import { useReducer, useState } from "react";
import Following from "../Following/Following";
import Follow from "../Follow/Follow";
import { addNewData } from "../../Utilities/helpers";
import { baseUrl } from "../../Utilities/url";

  

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { followers: state.followers + 1 };
      case "decrement":
        return { followers: state.followers - 1 };
      default:
        throw new Error();
    }
  }

const TweetsItem = ({ id, user, tweets, followers, avatar, isFollowing }) => {
  const [status, setStatus] = useState(isFollowing);

const initialState = { followers };
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const switchOnFollowing = () => {
    setStatus(!status);
    dispatch({ type: "increment" });
    addNewData(
      baseUrl,
      { followers: state.followers + 1, isFollowing: !status },
      id
    );
  };
  const switchOnFollow = () => {
    console.log(state.followers);
    setStatus(!status);
    dispatch({ type: "decrement" });
    addNewData(
      baseUrl,
      { followers: state.followers - 1, isFollowing: !status },
      id
    );
  };






  return (
    <div className={css.tweetsItemContainer}>
      <img src={imgSymbols} alt="" />
      <img src={eclipse} alt="" className={css.eclipse} />
      <img src={line} alt="" className={css.line} />
      <div className={css.imgContainer}>
        <img src={avatar} alt="avatar" className={css.avatar} />
      </div>
      <p className={css.tweets}>{tweets} tweets</p>
      <p className={css.followers}>{state.followers} followers</p>
      {status ? (
        <Following
          toggleFollowing={switchOnFollow}
          
        />
      ) : (
        <Follow
          toggleFollowing={switchOnFollowing}
         
        />
      )}
    </div>
  );
};

export default TweetsItem;
