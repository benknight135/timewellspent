import React from 'react';
import logo from '../data/logo.svg';

// React component for logo that bounces around the screen
class LogoBounce extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    };
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    const { x, y } = this.state;
    this.setState({
      x: x + Math.random() * 2 - 1,
      y: y + Math.random() * 2 - 1
    });
    requestAnimationFrame(this.animate.bind(this));
  }

  render() {
    const { x, y } = this.state;
    return (
      <div className="logo" style={{ transform: 'translate(' + x + 'px, ' + y + 'px)' }}>
        <img src={logo} alt="logo" />
      </div>
    );
  }
}

export default LogoBounce;