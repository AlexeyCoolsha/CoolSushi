import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Navigate replace to="/home" />} path="/"></Route>
        <Route element={<HomePage />} path="/home"></Route>
      </Routes>
    </div>
  );
}

export default App;
