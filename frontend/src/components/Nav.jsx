
    import react from 'react'
import { Link } from 'react-router-dom';
import Header from './Header';
function Nav() {
    return (
          <div id="nav-container">
             
    <div classNameName="bg"></div>
    {/* <Header/> */}
    <div className="button" tabindex="0">
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
    </div>
    
    <div id="nav-content" tabindex="0">
      <ul>
        <li><Link to="/profile" className="nav-link">Профиль</Link></li>
        <li><Link to="/assistant" className="nav-link">Интерактивный помощник</Link></li>
        <li><Link to="/profile" className="nav-link">База знаний</Link></li>
        <li><Link to="/profile" className="nav-link">Изменения в законодательстве</Link></li>
        <li><Link to="/profile" className="nav-link">Полезные советы</Link></li>
        <li><Link to="/profile" className="nav-link">Контакты</Link></li>
        <li className="small"><a href="#0">Facebook</a><a href="#0">Instagram</a></li>
      </ul>
    </div>
  </div>
    );
  }
  export default Nav;