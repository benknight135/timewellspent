import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TicTac from './games/TicTac';
import ComingSoon from './pages/ComingSoon';
import Footer from './components/Footer';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_secret: false
    };
  }

  toggleGame(){
    this.setState({
      show_secret: !this.state.show_secret
    });
  }

  render() {
    var page = <ComingSoon />;
    if (this.state.show_secret) {
      page = <TicTac />;
    }
    return (
      <React.StrictMode>
        <button className="secret" onClick={() => this.toggleGame()}>Shh</button>
        {page}
        <Footer />
      </React.StrictMode>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
