import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Layout = () => {
    return (
      <section>
        <Header/>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </section>
    );
}
 
export default Layout;