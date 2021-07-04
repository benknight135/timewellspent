import React from 'react';
import TicTac from './games/TicTac';
import ComingSoon from './pages/ComingSoon';
import Footer from './components/Footer';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show_secret: false
        };
    }

    toggleGame() {
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
            <div className="app">
                <button className="secret" onClick={() => this.toggleGame()}>Shh</button>
                {page}
                <Footer />
            </div>
        );
    }
}

export default App;