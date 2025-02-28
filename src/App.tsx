import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCourses from './components/FeaturedCourses';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CoursesPage from './components/CoursesPage';
import CoursePresentation from './components/CoursePresentation';

function App() {
  return (
    <Router>
      <Header logoSrc='../public/Logotipo-vertical-normal.png'/>
      <Routes>
        <Route path="/" element={
          <>
            <Hero heroImage= '../public/Logotipo-vertical-normal.png'/>
            <FeaturedCourses />
            <Stats />
            <Testimonials />
          </>
        } />
        <Route path="/cursos" element={<CoursesPage />} />
        <Route path="/curso/:id" element={<CoursePresentation />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;