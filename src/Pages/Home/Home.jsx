import { NavLink, useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation()
    return (
      <div>
        <NavLink to="/tweets" state={{ from: location }} location={location}>
          Tweets
        </NavLink>
      </div>
    );
}
 
export default Home;