import React from "react";
import { Link } from "react-router-dom";
import "../components/style.css";
const Header = () => {
    return (
        <div>
            <nav>
                <div className="logo">
                    <h4>健康管理アプリ</h4>
                </div>
                <ul className="nav-links">
                    <li>
                        <Link to={"/login"}>ログイン</Link>
                    </li>
                    <li>
                        <Link to={"/detail"}>設定</Link>
                    </li>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
