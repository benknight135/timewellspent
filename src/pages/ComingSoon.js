import logo from './../data/logo.svg';
import './ComingSoon.css';

function ComingSoon() {
    const { REACT_APP_LAST_UPDATE } = process.env;
    return (
        <div className="ComingSoon">
            <header className="ComingSoon-header">
                <h1 className="title">Time Well Spent</h1>
                <img src={logo} className="ComingSoon-logo" alt="logo" />
                <h2 className="title">Coming soon!</h2>
                <p>Last update: {REACT_APP_LAST_UPDATE}</p>
            </header>
        </div>
    );
}

export default ComingSoon;