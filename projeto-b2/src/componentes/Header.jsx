import { Fragment } from "react";
import "./Header.css";

const Header = () => {

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header;