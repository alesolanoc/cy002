import React, { Component } from 'react';  
  
class CodeMan008 extends Component {  
  constructor(props){  
    super(props);  
    this.state = {  
         data: 'www.javatpoint.com'  
      }  
    this.handleEvent = this.handleEvent.bind(this);  
  }  
  handleEvent(){  
    console.log(this.props);  
  }  
  render() {  
    return (  
      <div className="CodeMan008">  
    <h2>React Constructor Example</h2>  
    <input type ="text" value={this.state.data} />  
        <button onClick={this.handleEvent}>Please Click</button>  
      </div>  
    );  
  }  
}  
export default CodeMan008;