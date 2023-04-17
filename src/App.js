import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import "./App.css";


const Layout = lazy(() => import("./Components/Layout/Layout"));
const Home = lazy(() => import("./Pages/Home/Home"));
const Tweets = lazy(() => import("./Pages/Tweets/Tweets"));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to={"home"} />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="tweets" element={<Tweets />}></Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
