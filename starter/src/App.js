import "./App.css";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import ListBooks from "./pages/ListBooks";
import SearchBooks from "./pages/SearchBooks";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListBooks />} />
          <Route path="/search" element={<SearchBooks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
