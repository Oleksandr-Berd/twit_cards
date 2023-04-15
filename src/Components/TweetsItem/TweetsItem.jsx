import css from "./TweetsItem.module.css";
import imgSymbols from "../../Utilities/images/symbols.png";
import tempAvatar from "../../Utilities/images/Hansel.png";
import eclipse from "../../Utilities/images/Ellipse 1 (Stroke).png";
import line from "../../Utilities/images/Rectangle.png"

const TweetsItem = ({ id, user, tweets, followers, avatar }) => {
  return (
    <div className={css.tweetsItemContainer}>
      <img src={imgSymbols} alt="" />
      <img src={eclipse} alt="" className={css.eclipse} />
      <img src={line} alt="" className={css.line} />
      <div className={css.imgContainer}>
        <img src={avatar} alt="avatar" className={css.avatar} />
      </div>

      <p className={css.tweets}>{tweets} tweets</p>
      <p className={css.followers}>{followers} followers</p>
      <button className={css.btnFollow}>Follow</button>
    </div>
  );
};

export default TweetsItem;
