import "./App.css";
import { Route, Routes } from "react-router";
import { Home } from "./pages/home";
import { Top } from "./pages/top";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Top />}>
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
