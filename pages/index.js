import { Component } from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import d3 from 'd3'
import venn from 'venn.js'
import {generateNumber,arrayIntersection} from '../utils/logic'
import {formatIntoList} from '../utils/format'
import Venn from '../components/venn'
// <h3>Even</h3>
// {formatIntoList(generateNumber("Even",20), 'li')}
// <h3>Odd</h3>
// {formatIntoList(generateNumber("Odd",20), 'li')}
// <h3>All</h3>
// {formatIntoList(generateNumber("All",20), 'li')}
// <h3>Prime</h3>
// {formatIntoList(generateNumber("Prime",20), 'li')}

export default class HomePage extends Component {
  // Variables which you use in your view
  state = {
    n: '20',
    base: "Fibonacci",
    compare: "Prime"
  }
  // This is called whenever my <input> changes
  changeN = (event) => {
    // Get value from <input>
    const input = event.target
    const value = input.value
    // Change value of n in state
    this.state.n = value
    // Call render() again and update the screen
    this.forceUpdate()
  }
  changeBaseAll = (event) => {
    // Change value of n in state
    this.state.base = "All"
    // Call render() again and update the screen
    this.forceUpdate()
  }
  changeBaseOdd = (event) => {
    // Change value of n in state
    this.state.base = "Odd"
    // Call render() again and update the screen
    this.forceUpdate()
  }
  changeBaseEven = (event) => {
    // Change value of n in state
    this.state.base = "Even"
    // Call render() again and update the screen
    this.forceUpdate()
  }
  changeBasePrime = (event) => {
    // Change value of n in state
    this.state.base = "Prime"
    // Call render() again and update the screen
    this.forceUpdate()
  }
  changeBaseFibonacci = (event) => {
    // Change value of n in state
    this.state.base = "Fibonacci"
    // Call render() again and update the screen
    this.forceUpdate()
  }
  changeCompareAll = (event) => {
    // Change value of n in state
    this.state.compare = "All"
    // Call render() again and update the screen
    this.forceUpdate()
  }
  changeCompareOdd = (event) => {
    // Change value of n in state
    this.state.compare = "Odd"
    // Call render() again and update the screen
    this.forceUpdate()
  }
  changeCompareEven = (event) => {
    // Change value of n in state
    this.state.compare = "Even"
    // Call render() again and update the screen
    this.forceUpdate()
  }
  changeComparePrime = (event) => {
    // Change value of n in state
    this.state.compare = "Prime"
    // Call render() again and update the screen
    this.forceUpdate()
  }
  changeCompareFibonacci = (event) => {
    // Change value of n in state
    this.state.compare = "Fibonacci"
    // Call render() again and update the screen
    this.forceUpdate()
  }


  // View

  render() {
    const { n, base, compare } = this.state

    const baseNumberArray = generateNumber(base,n)
    const compareNumberArray = generateNumber(compare,n)
    const data = arrayIntersection(baseNumberArray,compareNumberArray)

    const baseArray = data[0]
    const compareArray = data[1]
    const intersection  = data[2]

    return (
      <div>
        <Head title="Home" />
        <Nav />
        <div></div>
        <label style={{ display: 'block' }}>
          Enter decimal:
          <input value={ n } onChange={ this.changeN } />
        </label>
        <p>A={base} numbers</p>
        <p>B={compare} numbers</p>
        <style jsx>{`
          .buttons {
          float:right;
          display:flex;
          width:100%;
          flex-direction: row;
          justify-content: space-around;
        }
        .vennSvg {
          width:80%;
          margin-left: auto;
          margin-right: auto;
        }
        `}</style>
        <div className="buttons">
        <div className="base">
        <h3>Change A</h3>
        <button onClick={this.changeBaseAll}>All</button>
        <button onClick={this.changeBaseOdd}>Odd</button>
        <button onClick={this.changeBaseEven}>Even</button>
        <button onClick={this.changeBasePrime}>Prime</button>
        <button onClick={this.changeBaseFibonacci}>Fibonacci</button>

        </div>
        <div className="compare">
        <h3>Change B</h3>
        <button onClick={this.changeCompareAll}>All</button>
        <button onClick={this.changeCompareOdd}>Odd</button>
        <button onClick={this.changeCompareEven}>Even</button>
        <button onClick={this.changeComparePrime}>Prime</button>
        <button onClick={this.changeCompareFibonacci}>Fibonacci</button>
        </div>
        </div>

        <div className="vennSvg">
        <Venn sets={
          [
            {sets: ['A'], size: baseNumberArray.length},
            {sets: ['B'], size: compareNumberArray.length},
            {sets: ['A','B'], size:  intersection.length}
          ]
        } />
        </div>


        <p>A = {'{' + baseNumberArray.join(',') + '}'}</p>
        <p>B = {'{' + compareNumberArray.join(',') + '}'}</p>
        <p>A - B = {'{' + baseArray.join(',') + '}'}</p>
        <p>B - A = {'{' + compareArray.join(',') + '}'}</p>
        <p>A ∩ B = {'{' + intersection.join(',') + '}'}</p>
      </div>

    )
  }
}
