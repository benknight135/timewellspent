import logo from './../data/logo.svg';
import MetaTags from 'react-meta-tags';
import './ComingSoon.css';

function ComingSoon() {
    const { REACT_APP_BUILD_DATE } = process.env;
    return (
        <div className="ComingSoon">
            <MetaTags>
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <meta name="theme-color" content="#282c34" />
            </MetaTags>
            <header className="ComingSoon-header">
                <h1 className="title">Time Well Spent</h1>
                <img src={logo} className="ComingSoon-logo" alt="logo" />
                <h2 className="title">Coming soon!</h2>
                <p>Last update: {REACT_APP_BUILD_DATE}</p>
            </header>
        </div>
    );
}

export default ComingSoon;