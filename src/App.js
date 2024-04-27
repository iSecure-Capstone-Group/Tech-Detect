import './App.css';
import Navigation from './components/navigation/navigation';
// import Home from './pages/homePage/homePage';
// import AboutUsPage from './pages/aboutPage/aboutPage';
import LoginPage from './pages/logSignPages/loginPage';
import SignupPage from './pages/logSignPages/signupPage';
import FeaturesPage from './pages/featuresPage/featuresPage';
import ResourcePage from './pages/resources/resourcePage';
import ForgotPasswordPage from './pages/logSignPages/forgotPassword';
import Terms from './pages/logSignPages/terms';
import DataPrivacyArticle from './pages/resources/dataPrivacyArticle';
// import Dashboard from './pages/dashboard/dashboard';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import HomePage from './pages/homePage/homePage';
import AboutPage from './pages/aboutPage/aboutPage';
import Dashboard from './pages/dashboard/dashboard';
import Articles from './components/resourceArticle/articleSection';
import ThreatMonitoring from './pages/dashboard/dashboardSections/threatMonitoring';
import Incidence from './pages/dashboard/dashboardSections/incidence';
import Overview from './pages/dashboard/dashboardSections/overview';
import Anomaly from './pages/dashboard/dashboardSections/anomaly';
import RealTimeAlerts from './pages/dashboard/dashboardSections/realTimeAlerts';
import ProfileManagement from './pages/dashboard/dashboardSections/profileManagement';
import HelpANdSupport from './pages/dashboard/dashboardSections/helpAndSupport/helpAndSupport';
import Settings from './pages/dashboard/dashboardSections/settings/settings';
import Logout from './pages/dashboard/dashboardSections/logout';
import General from './pages/dashboard/dashboardSections/settings/general';
import Privacy from './pages/dashboard/dashboardSections/settings/privacy';
import Billing from './pages/dashboard/dashboardSections/settings/billing';
import Security from './pages/dashboard/dashboardSections/settings/security';
import HelpSupportContact from './pages/dashboard/dashboardSections/helpAndSupport/helpSupportContact';
import HelpSupportFAQs from './pages/dashboard/dashboardSections/helpAndSupport/helpSupportFAQs';
import HelpSupportTicket from './pages/dashboard/dashboardSections/helpAndSupport/helpSupportTicket';
import BillingAndSubscription from './pages/dashboard/dashboardSections/BillingAndSubscription/BillingAndSubscription';



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },
  
  {
    path: "resources",
    element: <ResourcePage />,
    // children: [
    //   {
    //     path: "dataPrivacyArticle",
    //     element: <Articles />,
    //   }
    // ]
  },
  {
    path: "dataPrivacyArticle",
    element: <DataPrivacyArticle />,
    // children: [
    //   {
    //     path: "dataPrivacyArticle",
    //     element: <Articles />,
    //   }
    // ]
  },

  {
    path: "signup",
    element: <SignupPage />,
    // children: [
    //  {
    //     path: "login",
    //     element: <LoginPage />
    //   },
    //   {
    //     path: "terms",
    //     element: <Terms />
    //   }, 
    // ]
  },
  {
    path: "login",
    element: <LoginPage />,
    
  },
  

  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <Overview />,
      },
      {
        path: "incidence-response",
        element: <Incidence />,
      },
      {
        path: "threat-monitoring",
        element: <ThreatMonitoring />,
      },
      {
        path: "anomaly-detection",
        element: <Anomaly />,
      },
      {
        path: "real-time-alerts",
        element: <RealTimeAlerts />,
      },
      {
        path: "subscription",
        element: <BillingAndSubscription />,
      },
      {
        path: "profile-management",
        element: <ProfileManagement />,
      },
      {
        path: "help-support",
        element: <HelpANdSupport />,
        children: [
          {
            path: "",
            element: <HelpSupportContact />
          },
          {
            path: "faqs",
            element: <HelpSupportFAQs />
          },
          {
            path: "ticket",
            element: <HelpSupportTicket />
          },
        ]
      },
      {
        path: "settings",
        element: <Settings />,
        children: [
          {
            path: "",
            element: <General />
          },
          {
            path: "privacy",
            element: <Privacy />
          },
          {
            path: "billing",
            element: <Billing />
          },
          {
            path: "security",
            element: <Security />
          },
        ]
      },
      {
        path: "logout",
        element: <Logout />,
      },
       
    ],
  },
  {
    path: "terms",
    element: <Terms />
  },
  {
    path: "forgot-password",
    element: <ForgotPasswordPage />,
  },
]);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App




// import { Routes, Route } from 'react-router-dom';


// const App = () => {
//   return (
    
//     <>
      
      
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/aboutPage" element={<AboutUsPage />} />
//         <Route path="/featuresPage" element={<FeaturesPage />} />
//         <Route path="/resourcesPage" element={<ResourcePage />} />
//         <Route path="/dataPrivacyArticle" element={<DataPrivacyArticle />} />
//         <Route path="/loginPage" element={<LoginPage />} />
//         <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
//         <Route path="/terms" element={<Terms />} />
//         <Route path="/signupPage" element={<SignupPage />} />
//         <Route path="/dashboard" element={<Dashboard />} />
        
//       </Routes>
      
//     </>
    
//   );
// }

// export default App;
