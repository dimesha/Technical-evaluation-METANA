import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import NameFormPage from './pages/NameFormPage';
import CountryFormPage from './pages/CountryFormPage';
import LanguageForm from './pages/LanguageForm';
import Home from './pages/Home';
import EmailFormPage from './pages/EmailFormPage';
import PhoneFormPage from './pages/PhoneNumberForm';
import ExpeienceForm from './pages/ExpeienceFormPage';
import SalaryForm from './pages/SalaryFormPage';
import StatementForm from './pages/StatementFormPage';
import LinkedInForm from './pages/LinkedInFormPae';
import ThankYouForm from './pages/ThankyouPage';

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>

        <Route path="/" element={ <Home/> }/>
        <Route path="/name-form" element={ <NameFormPage/> }/>
        <Route path="/email-form" element={ <EmailFormPage/> }/>
        <Route path="/country-form" element={ <CountryFormPage/> }/>
        <Route path="/phone-form" element={ <PhoneFormPage/> }/>
        <Route path="/language-form" element={ <LanguageForm/> }/>
        <Route path="/expeience-form" element={ <ExpeienceForm/> }/>
        <Route path="/salary-form" element={ <SalaryForm/> }/>
        <Route path="/statement-form" element={ <StatementForm/> }/>
        <Route path="/linkedin-form" element={ <LinkedInForm/> }/>
        <Route path="/thankyou-form" element={ <ThankYouForm/> }/>

      </Routes>
    </BrowserRouter>
  )
}