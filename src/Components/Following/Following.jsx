import css from "./Following.module.css"

const Following = ({toggleFollowing}) => {
    return (
      <button className={css.btnFollowing} onClick={toggleFollowing}>
        Following
      </button>
    );
}

 
export default Following;