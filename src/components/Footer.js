import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer>
        <div className="container">
            <div className="row">
                <div className="three columns">
                    <Link to="/" className="logo">
                        <span></span>
                    </Link>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer;