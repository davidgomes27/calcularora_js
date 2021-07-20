import React, { Component } from 'react'
import styled from "styled-components";
import "./App.css"

const Container = styled.div`
  background-image: radial-gradient(
    circle at 82.8% 17.2%,
    #0087ff 0,
    #0080ff 8.33%,
    #0077ff 16.67%,
    #006cff 25%,
    #655fff 33.33%,
    #9450ff 41.67%,
    #b53cf2 50%,
    #ce1edf 58.33%,
    #e200cb 66.67%,
    #f200b5 75%,
    #fd009f 83.33%,
    #ff0088 91.67%,
    #ff0072 100%
  );
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Boxinput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 20vh;
  justify-content: center;
  justify-content: space-evenly;
  align-items: center;
`;

const Inputs = styled.input`
  background-color: #fff00000;
  width: 150px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid;
  box-shadow: 2px 4px 8px;
`;

const Operadores = styled.button`
  background-color: #fff00000;
  width: 30px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 2px 4px 8px;
  border: 2px solid;
`;

const Boxbuttons = styled.div`
  width: 30vw;
  display: flex;
  justify-content: space-around;
`;

const Buttonclear = styled.button`
  background-color: #fff00000;
  width: 70px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 2px 4px 8px;
  border: 2px solid;
`;

const H1res = styled.h1`
  text-shadow: 5px 4px 5px rgba(29, 24, 24, 0.95);
`;

export default class App extends Component {
  state = {
    n1: "",
    n2: "",
    res: "0"
  };

  handleChangeN1 = (event) => {
    this.setState({
      n1: Number(event.target.value)
    });
  };

  handleChangeN2 = (event) => {
    this.setState({
      n2: Number(event.target.value)
    });
  };

  handleClickDiv = () => {
    this.setState({
      res: this.state.n1 / this.state.n2
    });
  };

  handleClickMult = () => {
    this.setState({
      res: this.state.n1 * this.state.n2
    });
  };

  handleClickSub = () => {
    this.setState({
      res: this.state.n1 - this.state.n2
    });
  };

  handleClickAdd = () => {
    this.setState({
      res: this.state.n1 + this.state.n2
    });
  };

  clear = () => {
    this.setState({
      n1: "",
      n2: "",
      res: "0"
    });
  };

  render() {
    return (
      <Container>
        <Boxinput>
          <Inputs
            placeholder="Number"
            value={this.state.n1}
            onChange={this.handleChangeN1}
          />
          <Inputs
            placeholder="Number"
            value={this.state.n2}
            onChange={this.handleChangeN2}
          />
        </Boxinput>
        <H1res>{this.state.res}</H1res>
        <Boxbuttons>
          <Operadores onClick={this.handleClickDiv}>/</Operadores>
          <Operadores onClick={this.handleClickMult}>*</Operadores>
          <Operadores onClick={this.handleClickSub}>-</Operadores>
          <Operadores onClick={this.handleClickAdd}>+</Operadores>
          <Buttonclear onClick={this.clear}>Clear</Buttonclear>
        </Boxbuttons>
      </Container>
    );
  }
}

