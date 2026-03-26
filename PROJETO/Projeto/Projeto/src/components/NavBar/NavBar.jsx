import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li><a href="#home">Home</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#cards">Veículos</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
  )
}

export default NavBar