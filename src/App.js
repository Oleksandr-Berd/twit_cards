import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import Tweets from "./Pages/Tweets/Tweets";
import Redirect from "./Pages/Redirect/Redirect";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to={"home"} />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="tweets" element={<Tweets />}></Route>
        </Route>
        <Route path="*" element={<Redirect />} />
      </Routes>
    </div>
  );
}

export default App;
