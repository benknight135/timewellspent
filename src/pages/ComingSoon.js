import logo from './../data/logo.svg';
import './ComingSoon.css';

function ComingSoon() {
    return (
        <div className="ComingSoon">
            <header className="ComingSoon-header">
                <h1 className="title">Time Well Spent</h1>
                <img src={logo} className="ComingSoon-logo" alt="logo" />
                <h2 className="title">Coming soon!</h2>
                <p><a href="mailto:support@timewellspent.app">support@timewellspent.app</a></p>
                <p>Last update: 20:26 27/06/2021</p>
            </header>
        </div>
    );
}

export default ComingSoon;