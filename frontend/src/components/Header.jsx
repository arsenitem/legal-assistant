import react from 'react'
import img from '../assets/logo.png'
function Header() {
    return (
      <div className="header">
          <nav className="navbar navbar-light bg-light">
                <div className="logo"></div>
                {/* <ul className="nav justify-content-center">
                <h3>
                Умный правовой помощник. Курабье
                    </h3>
                    </ul> */}
                <div>
                    Регистрация
                </div>
            </nav>
      </div>
    );
  }
  export default Header;