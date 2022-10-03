import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar'
import Main from './components/Main'
import Login from './components/Login'
import NoPage from './components/Error'
function App() {
  return (
    <div className="appContent">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/*" element={<NoPage />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
