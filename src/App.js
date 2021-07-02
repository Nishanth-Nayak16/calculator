import React, { Component } from 'react';
import './App.css';
import './index.css';
import Elements from './component/elements';

class App extends Component {
  //State to store input and output
  state = {
    output : '',
    input : ''
  }

  //To get input when button is pressed
  inputChangedHandler = (event) => {
    if(event.target.value === '=') {
      let value = 0;
      try {
        value = eval(this.state.input);
        value = value.toFixed(4);
      } catch(err) {
        this.setState({output: "Math Error"})
      }
      if(value === undefined) {
        this.setState({output: "Math error"});
      } else {
        this.setState({input: '', output: value});
      }
    } else {
      let inputValue = this.state.input + event.target.value;
      this.setState({input: inputValue, output: ''});
    }
  }

  //Clearing input and output when 'C' is pressed
  inputClearHandler = (event) => {
    this.setState({input: '', output: ''});
  }

  inputBackspaceHandler = (event) => {
    const value = this.state.input.length;
    let str = this.state.input;
    str = str.slice(0, value-1);
    //console.log(str.slice(0, value-1));
    this.setState({input: str});
  }
  
  render() {
    //Values for buttons
    const valueElementsArray = ['(', ')', '%', 7, 8, 9, '/', 4, 5 ,6, '*', 1, 2, 3, '-', '.', 0, '=', '+'];
    const buttons = valueElementsArray.map( valueElement => (
      <Elements
      key={valueElement}
      type="button" 
      value={valueElement}
      clicked={( event ) => this.inputChangedHandler( event )}>
      {valueElement}</Elements>
   ));

   const backspace = '<<';
    return (
      <div className="mainCalc">
        <br></br>
        <h1>CALCULATOR</h1>
        <br></br>
        <Elements type="text" value={this.state.input} />
        <Elements type="text" value={this.state.output} />
        <Elements type="button" value="<<" 
         clicked={( event ) => this.inputBackspaceHandler( event )}>{backspace}</Elements>
         <br></br><br></br>
        <Elements type="button" value="C" 
          clicked={( event ) => this.inputClearHandler( event )}>C</Elements>
        {buttons}
      </div>
    );
  }
}

export default App;
