import React, { Component } from 'react';
import { connect } from 'react-redux'
import { increment, decrement, reset } from '../action';

class Counter extends Component {
   
   render() {
      //const {counter,increment,decrement,reset} = this.props;
      return (
         <div className = "App">
            <div>{this.props.counter}</div>
            <div>
               <button onClick = {this.props.increment}>INCREMENT BY 1</button>
            </div>
            <div>
               <button onClick = {this.props.decrement}>DECREMENT BY 1</button>
            </div>
            <button onClick = {this.props.reset}>RESET</button>
         </div>
      );
   }
}
const mapStateToProps = (state) => {
    return {
       counter: state.counter
    };
 };
 const mapDispatchToProps = (dispatch) => {
    return {
       increment: () => dispatch(increment()),
       decrement: () => dispatch(decrement()),
       reset: () => dispatch(reset())
    };
 };
 export default connect(mapStateToProps,mapDispatchToProps)(Counter);