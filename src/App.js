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
        </Routes>
      </Router>
    </>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';

// // Import your components for different routes (e.g., Home, About, etc.)
// import Home from './components/Home';

// function App() {
//   return (
//     <>
//       <Router>
//         <Navbar />
//         <Routes>
//           {/* Specify the component to render for the root path */}
//           <Route path="/" element={<Home />} />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;
