import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home/Home';
import TweetsList from './Components/TweetsList/TweetsList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to={"home"} />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="tweets" element={<TweetsList />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
