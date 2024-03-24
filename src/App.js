import './App.css';
import Navigation from './components/navigation/navigation';
import Home from './pages/homePage/homePage';
import AboutUsPage from './pages/aboutPage/aboutPage';
import LoginPage from './pages/logSignPages/loginPage';
import SignupPage from './pages/logSignPages/signupPage';
import FeaturesPage from './pages/featuresPage/featuresPage';
import ResourcePage from './pages/resources/resourcePage';
import ForgotPasswordPage from './pages/logSignPages/forgotPassword';
import Terms from './pages/logSignPages/terms';
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    
    <>
      
      <Navigation /> {/* Always render navigation */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutPage" element={<AboutUsPage />} />
        <Route path="/featuresPage" element={<FeaturesPage />} />
        <Route path="/resourcesPage" element={<ResourcePage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/signupPage" element={<SignupPage />} />
      </Routes>
      
    </>
    
  );
}

export default App;
