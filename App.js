import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        {/* <Route path="/contact" element={<Contact /> }></Route> */}
      </Routes>
    </Router>
  );
};

export default App;
