import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdminDashboard from "./pages/AdminDashboard"; // Create this later
import HomePage from "./pages/HomePage";
import AdminLoginPage from "./pages/AdminLogin";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdmissionForm from "./components/AdmissionForm";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import AdminMessages from "./pages/AdminMessages";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/admission" element={<AdmissionForm />} />
        <Route path="/contact" element={<ContactUs />} />
        
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/messages" element={<AdminMessages />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
