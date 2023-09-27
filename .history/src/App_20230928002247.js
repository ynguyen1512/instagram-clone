import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/Homepage";
import PersonalPage from "./components/PersonalPage/PersonalPage";
import Login from "./components/Auth/Login";
import Message from "./components/Message/Message";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signup2 from "./components/Auth/Signup2";
import Explore from "./components/Explore/Explore";
import Reels from "./components/Reels/Reels";
import MercedesPage from "./components/PersonalPage/MercedesPage";
import AudiPage from "./components/PersonalPage/AudiPage";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/personal" element={<PersonalPage />} />
          <Route path="/mercedes" element={<MercedesPage />} />
          <Route path="/audi" element={<AudiPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup2 />} />
          <Route path="/inbox" element={<Message />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/reels" element={<Reels />} />
          {/* <Route path="/search" element={<Search />} /> */}
        </Routes>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
