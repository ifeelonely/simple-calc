import React from "react";
import "./App.css";
import Row from "./components/Row";
import { Input } from "./components/Input";
import { ClearButton } from "./components/ClearButton";
import * as math from 'mathjs';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { input: "" };
  }

  addToInput = (val) => {
    this.setState({input: this.state.input + val});
  }

  handEqual = () => {
    this.setState({input: math.evaluate(this.state.input)})
  }

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <Input input={this.state.input}></Input>
          <Row handleClick={this.addToInput} values={{ first: 7, second: 8, third: 9, forth: "/" }}></Row>
          <Row handleClick={this.addToInput} values={{ first: 4, second: 5, third: 6, forth: "*" }}></Row>
          <Row handleClick={this.addToInput} values={{ first: 1, second: 2, third: 3, forth: "+" }}></Row>
          <Row handleClick={this.addToInput} handEqual={this.handEqual} values={{ first: ".", second: 0, third: "=", forth: "-" }}></Row>
          <ClearButton handleClear={() => this.setState({ input: "" })}>
            Clear
          </ClearButton>
        </div>
      </div>
    );
  }
}

export default App;
