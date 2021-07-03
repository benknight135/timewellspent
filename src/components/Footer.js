import './Footer.css';

function ComingSoon() {
    const { REACT_APP_BUILD_DATE } = process.env;
    const source_url = "github.com/benknight135/timewellspent"
    return (
        <div className="footer">
            <p class="footer">Created by Ben Knight</p>
            <p class="footer">Source: {source_url} </p>
            <p class="footer">Last updated: {REACT_APP_BUILD_DATE}</p>
        </div>
    );
}

export default ComingSoon;