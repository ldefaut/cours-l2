import React from 'react';

class Timer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { seconds: 0,
                   minutes: 0};
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }
  minutes(){
    this.setState(state =>({
        minutes : state.minutes +1,
        seconds : 0
      }))
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div data-testid="timer">
        Secondes : {this.state.seconds}  
      </div>
    );
  }
}

export default Timer;
