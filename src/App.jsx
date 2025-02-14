import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddTodo from "./components/AddTodo";
import Dashboard from "./components/Dashboard";
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/todo" element={<><NavBar /><AddTodo /></>} />
      </Routes>
    </Router>
  );
}

export default App;
