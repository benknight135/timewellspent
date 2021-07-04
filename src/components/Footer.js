import React from 'react';
import './Footer.css';
import github from '../data/github.svg';

class ComingSoon extends React.Component {
    constructor(props) {
      super(props);
      const { REACT_APP_BUILD_DATE } = process.env;
      this.state = {
        last_updated: REACT_APP_BUILD_DATE,
        github_repo: "https://github.com/benknight135/timewellspent"
      };
    }

    gitHubExternal() {
        window.open(this.state.github_repo);
    }

    render() {
        const last_updated = this.state.last_updated;
        return (
            <div className="footer">
                <div className="footer-container">
                    <input className="footer-github" type="image" alt="Github logo" src={github} onClick={() => this.gitHubExternal()}/>
                    <p className="footer p">Created by Ben Knight</p>
                    <p className="footer p">Last updated: {last_updated}</p>
                </div>
            </div>
        );
    }
}

export default ComingSoon;