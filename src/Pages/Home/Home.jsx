import { NavLink, useLocation } from "react-router-dom";
import css from "./Home.module.css"
import image from "../../Utilities/images/homePage/1.jpeg";
import image2 from "../../Utilities/images/homePage/Communications.jpeg";
import image3 from "../../Utilities/images/homePage/communications_376695439.jpeg";
import image4 from "../../Utilities/images/homePage/inspiring_global_action_reframing_responsibilities_to_one_another_and_our_communities_during_the_covid-19_pandemic.jpeg";
import image5 from "../../Utilities/images/homePage/media-communication-tree-strategy-mix.jpeg";
import image6 from "../../Utilities/images/homePage/wireless-standards-technology-communications.jpeg";

const Home = () => {
    const location = useLocation()
    return (
      <div>
        <h1 className={css.title}>Welcome to the App!</h1>
        <NavLink
          to="/tweets"
          state={{ from: location }}
          location={location}
          className={css.tweetsLink}
        >
          Tweets
        </NavLink>
        <div className={css.container}>
          <div className={css.panelFirst}>
            <div className={css.panelTall}>
              <img src={image} alt="connection" className={css.img} />
            </div>
            <div className={css.panelSmall}>
              <img src={image2} alt="connection" className={css.img} />
            </div>
          </div>

          <div className={css.panelSecond}>
            <div className={css.panelSmall}>
              <img src={image3} alt="connection" className={css.img} />
            </div>
            <div className={css.panelTall}>
              <img src={image4} alt="connection" className={css.img} />
            </div>
          </div>

          <div className={css.panelFirst}>
            <div className={css.panelTall}>
              <img src={image5} alt="connection" className={css.img} />
            </div>
            <div className={css.panelSmall}>
              <img src={image6} alt="connection" className={css.img} />
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Home;