import compareIcon from "../../images/free-icon-graph-2567990.png";
import login from "../../images/free-icon-person-14102739.png";
import cart from "../../images/free-icon-trolley-5028852.png"
import menu from "../../images/free-icon-menu-2976215.png";

import SearchPanel from "../appSearchPanel/searchPanel";

import "./appHender.scss";

const AppHeader = () => {
    return(
        <header className="app__header">
                    <span className="app__logo">Aks!</span>
                    <div className="app__catalog">
                        <button name="button" className="app__button">
                            <img src={menu} alt="Лого меню"/>
                            <p>Каталог</p>
                        </button>
                    </div>
                    <div className="app__search-wrapper">
                        <SearchPanel/>
                    </div>
                    <nav className="app__menu">
                        <ul>
                            <li>
                                <img src={compareIcon} alt="Логотип Сравнения"/>
                                <a href="/compare">Сравнение</a>
                            </li>
                            <li>
                                <img src={login} alt="Логотип Акаунта"/>
                                <a href="/login">Войти</a>
                            </li>
                            <li>
                                <img src={cart} alt="Логотип Корзины"/>
                                <a href="/cart">Корзина</a></li>
                        </ul>
                    </nav>
        </header>
    )

}

export default AppHeader;