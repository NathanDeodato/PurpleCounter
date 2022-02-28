import React, { Component } from "react"

// Images 
import {iconMore, iconReset, iconLess, iconSystemHome} from "../src/Assets"

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
      <div className="purpleBody">
        
        <header>
          
          <img className="systemHome" src={iconSystemHome}>

            <a href="https://purplesystem.netlify.app/"></a>

          </img>

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
              
                <img className="operationButton" src={iconMore} alt="" onClick={this.moreNum}></img>

                <img className="resetIcon" src={iconReset} alt="" onClick={this.clearNum}></img>
                
                <img className="operationButton" src={iconLess} alt="" onClick={this.lessNum}></img>

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
