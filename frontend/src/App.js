import SlideShow from "./components/BerandaItem/SlideShow";
import NavigationBar from "./components/BerandaItem/NavigationBar";
import Fitur from "./components/BerandaItem/Fitur";
import Testimoni from "./components/BerandaItem/Testimoni";
import Beranda from "./components/Beranda";
import Footer from "./components/BerandaItem/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/LoginPage/Page/Login";

function App() {
  return (
    <>
    {/* <NavigationBar /> */}
   <Router>
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="/fitur" element={<Fitur />} />
      <Route path="/testimoni" element={<Testimoni />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
   </Router>
  </>
  );
}

export default App;
