import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import AddToHomeScreenPrompt from "./components/AddToHomeScreenPrompt";
import PrivacyPolicy from "./pages/LandingPage/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";


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
