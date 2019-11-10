import React from 'react';
import "./index.scss"
const logo: string = "";

const Mheader: React.FC = () => {
    return (
        <header>
            <div className="header-container">
                <div>
                    {logo}
                </div>
                <div>
                    白日依山尽，黄河入海流
                </div>
            </div>
        </header>
    )
}
export default Mheader;
