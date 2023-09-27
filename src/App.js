import React from 'react';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostsList from './components/PostList';
import ContactPage from './components/Contact';
import './App.css';
import AboutPage from './components/About';
import LoginPage from './components/Login';
import SignupForm from './components/Signup';
import PostDetail from './components/PostDetail';
import Profile from './components/Profile';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<PostsList />} exact />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/sign-up" element={<SignupForm />} />
          <Route path="/log-in" element={<LoginPage />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
