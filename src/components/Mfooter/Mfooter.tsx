
import React from 'react';
import "./index.scss"
const logo: string = "";

const Mfooter: React.FC = () => {
    return (
        <footer>
            <div className="footer-container">
                <div>
                    {logo}
                </div>
                <div>
                    白日依山尽，黄河入海流
                </div>
            </div>
        </footer>
    )
}
export default Mfooter;
