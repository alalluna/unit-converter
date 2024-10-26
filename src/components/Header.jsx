import React from "react";
import Icon from '../assets/Icon.svg'
function Header() {
    return (
        <>
            <header className="header">
                <div className="header-content">
                    <div className="icon-div">
                        <img src={Icon} alt="Icon" className="icon" />
                    </div>
                    <h1>unit converter</h1>
                </div>
            </header>

        </>

    );
}

export default Header;