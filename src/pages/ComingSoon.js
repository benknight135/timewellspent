import logo from './../data/logo.svg';
import {Helmet} from "react-helmet";
import './ComingSoon.css';

function ComingSoon() {
    return (
        <div className="ComingSoon">
            <Helmet>
            <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <meta name="theme-color" content="#282c34" />
            </Helmet>
            <header className="ComingSoon-header">
                <h1 className="title">Time Well Spent</h1>
                <img src={logo} className="ComingSoon-logo" alt="logo" />
                <h2 className="title">Coming soon!</h2>
            </header>
        </div>
    );
}

export default ComingSoon;