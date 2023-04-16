import css from "./Follow.module.css"

const Follow = ({ toggleFollowing}) => {
   
  return (
    <button className={css.btnFollow} onClick={toggleFollowing}>
      Follow
    </button>
  );
};
 
export default Follow;