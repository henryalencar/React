import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    // Se não estiver na Home, primeiro navega para: /
    if (window.location.pathname !== '/') {
      navigate('/'); // navega para Home

      // espera 200ms para o DOM carregar
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <ul className="nav-list">
        <li><button onClick={() => scrollToSection('home')}>Home</button></li>
        <li><button onClick={() => scrollToSection('sobre')}>Sobre</button></li>
        <li><button onClick={() => scrollToSection('cards')}>Veículos</button></li>
        <li><button onClick={() => scrollToSection('contato')}>Contato</button></li>
        
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;