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
        var btn_text = 'Shh';
        if (this.state.show_secret) {
            page = <TicTac />;
            btn_text = 'Back';
        }
        return (
            <div className="app">
                <button className="secret" onClick={() => this.toggleGame()}>{btn_text}</button>
                {page}
                <Footer />
            </div>
        );
    }
}

export default App;