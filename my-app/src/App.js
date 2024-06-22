import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuScreen from './pages/MenuScreen/MenuScreen.js';
import EventCalendarPage from './pages/EventCalendarPage/EventCalendarPage.js';
import ClubManagementPage from './pages/ClubManagementPage/ClubManagementPage.js';
import SalesAnalysis from './pages/SalesAnalysis/SalesAnalysis.js';
import ParetoAnalysisFormPage from './pages/ParetoAnalysisFormPage.js';
import VariationAnalysisPage from './pages/VariationPage/VariationAnalysisPage.js';
import PageLayout from './pages/pageLayout/Heder.js';
import LoginPage from './pages/LoginPage/LoginPage.js';
import Prediction from './pages/prediction/Prediction.js';
import SurveyLandingPage from './pages/Survey/SurveyLandingPage.js';
import SurveyCreationForm from './pages/Survey/SurveyCreationForm.js';
import SurveyList from './pages/Survey/SurveyList.js';
import SurveyResults from './pages/Survey/SurveyResults.js';




const App = () => {
  return (
    <Router basename="/Triangle">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/menu" element={<PageLayout><MenuScreen /></PageLayout>} />
        <Route path="/event-calendar" element={<PageLayout><EventCalendarPage /></PageLayout>} />
        <Route path="/club-management" element={<PageLayout><ClubManagementPage /></PageLayout>} />       
        <Route path="/sales-analysis" elemenst={<PageLayout><ParetoAnalysisFormPage /></PageLayout>} />
        <Route path="/variation-analysis" element={<PageLayout><VariationAnalysisPage /></PageLayout>} />
        <Route path="/prediction" element={<PageLayout><Prediction/></PageLayout>} />
        <Route path="/Survey-LandingPage" element={<PageLayout><SurveyLandingPage /></PageLayout>} />
        <Route path="/Survey-CreationForm" element={<PageLayout><SurveyCreationForm /></PageLayout>} />
        <Route path="/Survey-Results" element={<PageLayout><SurveyResults /></PageLayout>} />
      </Routes>
    </Router>
  );
};


export default App;





