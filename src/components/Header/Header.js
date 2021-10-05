import "./Header.css"
const Header = ()=> {
  return(
    <nav className ="Header">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#">Carrito</a></li>
        </ul>
      </nav>
  );
};

export default Header;