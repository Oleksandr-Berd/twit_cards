import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Dna } from "react-loader-spinner";
import css from "./Layout.module.css"


const Layout = () => {
    return (
      <section className={css.layout}>
        <Suspense
          fallback={
            <Dna
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          }
        >
          <Outlet />
        </Suspense>
      </section>
    );
}
 
export default Layout;