import { Link } from "react-router-dom";
import Logo from "../../public/img/logo.svg";
import Navegacion from "./navegacion";

function Header() {

    return (
        <header className="header">
            <div className="contenedor barra">
                <Link to="/" className="logo">
                    <img className="logo" src={Logo} alt="imagen logo" />
                </Link>
                <Navegacion />
            </div>
        </header>
    );
}

export default Header;
