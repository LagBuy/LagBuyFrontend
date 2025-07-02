import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import AddToHomeScreenPrompt from "./components/AddToHomeScreenPrompt";

function App() {
  return (
    <BrowserRouter>
      <AddToHomeScreenPrompt />  
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
