import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCourses from './components/FeaturedCourses';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CoursesPage from './components/CoursesPage';
import CoursePresentation from './components/CoursePresentation';
import Unidades from './components/Unidades';
import Formulario from './components/Formulario';
import { useEffect } from 'react';

// 🔄 Novo componente com controle por rota
const LayoutWithConditionalHeaderFooter = () => {
  const location = useLocation();

  const hideLayoutOnRoutes = ['/formulario']; // rotas sem header/footer
  const isLayoutHidden = hideLayoutOnRoutes.includes(location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {!isLayoutHidden && <Header logoSrc="/Logotipo-vertical-normal.png" />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <FeaturedCourses />
              <Stats />
              <Testimonials />
            </>
          }
        />
        <Route path="/cursos" element={<CoursesPage />} />
        <Route path="/curso/:id" element={<CoursePresentation />} />
        <Route path="/unidades" element={<Unidades />} />
        <Route path="/formulario" element={<Formulario />} />
      </Routes>

      {!isLayoutHidden && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <LayoutWithConditionalHeaderFooter />
    </Router>
  );
}

export default App;
