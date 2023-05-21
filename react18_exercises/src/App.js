import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/dashboard";
import ButtonOnClick from "./buttons/buttonOnClick";
import InputValueDisplay from "./inputs/inputValueDisplay";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/buttons" element={<ButtonOnClick />} />
        <Route path="/inputs" element={<InputValueDisplay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
