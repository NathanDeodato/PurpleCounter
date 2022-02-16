import React, { Component } from "react"

import moreIcon from "./Assets/more.png"
import resetIcon from "./Assets/reset.png"
import lessIcon from "./Assets/less.png"

import "./App.css"

export default class App extends Component {
  state = {
    number: 0,
  }

  moreNum = () => {
    if (this.state.number < 10) {
      this.setState({number: this.state.number + 1})
    }
  }

  clearNum = () => {
    this.setState({number: this.state.number = 0})
  }

  lessNum = () => {
    if (this.state.number > 0) {
      this.setState({number: this.state.number - 1})
    }
  }
  
  render() {
    return (
      <div className="orangeBody">
        
        <header>
          
          <h1 className="title">
            PurpleCounter
          </h1>

        </header>
        
        <main>
          
          <section className="counterBox">

            <section className="visorBox">
              
              <h2>
                {this.state.number}
              </h2>

            </section>

            <section className="buttonsBox">
              
                <img className="operationButton" src={moreIcon} alt="" onClick={this.moreNum}></img>

                <img className="resetIcon" src={resetIcon} alt="" onClick={this.clearNum}></img>
                
                <img className="operationButton" src={lessIcon} alt="" onClick={this.lessNum}></img>

            </section>

          </section>

        </main>
        
        <footer>
          <copy>&copy; Deodatont 2022</copy>
        </footer>
      </div>
    )
  }
}
