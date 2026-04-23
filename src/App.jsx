import { Routes, Route, Navigate } from "react-router-dom";
import MenuPage from "./pages/MenuPage.jsx";
import QuizPage from "./pages/QuizPage.jsx";
import CompendioPage from "./pages/CompendioPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/menu" replace />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/compendio" element={<CompendioPage />} />
    </Routes>
  );
}
