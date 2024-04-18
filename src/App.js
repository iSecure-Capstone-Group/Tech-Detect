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
import DataPrivacyArticle from './pages/resources/dataPrivacyArticle';
import Dashboard from './pages/dashboard/dashboard';
// import Overview from './pages/dashboard/dashboardSections/overview';
// import incidence from './pages/dashboard/dashboardSections/incidence';
import { Routes, Route } from 'react-router-dom';
// import Incidence from './pages/dashboard/dashboardSections/incidence';


const App = () => {
  return (
    
    <>
      
      {/* <Navigation /> Always render navigation */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutPage" element={<AboutUsPage />} />
        <Route path="/featuresPage" element={<FeaturesPage />} />
        <Route path="/resourcesPage" element={<ResourcePage />} />
        <Route path="/dataPrivacyArticle" element={<DataPrivacyArticle />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/signupPage" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/overview" element={<Overview />} /> */}
        {/* <Route path="/incidence" element={<Incidence />} /> */}
      </Routes>
      
    </>
    
  );
}

export default App;
