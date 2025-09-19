import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import AddToHomeScreenPrompt from "./components/AddToHomeScreenPrompt";
import TermsOfUse from "./pages/LandingPage/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <BrowserRouter>
      <AddToHomeScreenPrompt />  
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/TermsOfUse" element={<TermsOfUse/>} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
