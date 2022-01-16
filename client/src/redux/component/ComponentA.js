import React from 'react';
import { connect } from 'react-redux';
import Counter from './Counter';
import {changeMood,resetMood} from '../action'

class ComponentA extends React.Component {
    componentDidMount() {
        //this.props.dispatch({ type: 'CHANGE_MOOD', payload: 'happy' });
        //this.props.makeJonHappy('happy i am doing good');
        //this.props.saySomethingNiceJon();
    }
    changeMood = () => {
        this.props.makeJonHappy('happy');
    }
    changeGreeting = () => {
        this.props.saySomethingNiceJon();
    }
    reset = () => {
        this.props.reset();
    }
  render() {
    //const {name,mood,greetMessage} = this.props;
    return (
      <>
        <h1>Name: {this.props.moods.name}</h1>
        <p>Mood: {this.props.moods.mood}</p>
        <p>{this.props.moods.greetMessage}</p>
        <button onClick={this.changeMood}>Change Mood</button>
        <button onClick={()=>this.props.makeJonHappy('Amazing')}>Change Mood with props</button>
        <button onClick={this.changeGreeting}>Change Greeting</button>
        <button onClick={this.reset}>Reset</button>
        <Counter/>
      </>
    )
  }
}

const mapStateToProps = state => { 
    return {
        //name: state.moods.name,
        //mood: state.moods.mood,
        //greetMessage: state.moods.greetMessage
        moods: state.moods
    };
};

const mapDispatchToProps = dispatch => ({
    //makeJonHappy: (data) => dispatch({ type: 'CHANGE_MOOD', payload: data }),
    makeJonHappy: (data) => dispatch(changeMood(data)),
    reset: () => dispatch({ type: 'RESET_MOOD', payload: {} }),
    //reset: () => dispatch(resetMood()),
    saySomethingNiceJon: () => dispatch({
      type: 'CHANGE_GREET_MESSAGE',
      payload: 'Nice to meet you...'
    }),
  });

export default connect(mapStateToProps,mapDispatchToProps)(ComponentA);