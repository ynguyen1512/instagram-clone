import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/Homepage";
import PersonalPage from "./components/PersonalPage/PersonalPage";
import Login from "./components/Auth/Login";
import Message from "./components/Message/Message";
import ListOfMess from "./components/Message/ListOfMess";
import Signup from "./components/Auth/Signup";
import Signup2 from "./components/Auth/Signup2";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/personal" element={<PersonalPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup2 />} />
          <Route path="/inbox" element={<Message />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
