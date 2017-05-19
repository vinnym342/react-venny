import { Component } from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import d3 from 'd3'
import venn from 'venn.js'
import {generateNumber,arrayUnion} from '../utils/logic'
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
    base: "All",
    compare: "All"
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


  // View

  render() {
    const { n, base, compare } = this.state

    const baseNumberArray = generateNumber(base,n)
    const compareNumberArray = generateNumber(compare,n)
    const data = arrayUnion(baseNumberArray,compareNumberArray)

    const baseArray = data[0]
    const compareArray = data[1]
    const union  = data[2]

    return (
      <div>
        <Head title="Home" />
        <Nav />
        <div></div>
        <label style={{ display: 'block' }}>
          Enter decimal:
          <input value={ n } onChange={ this.changeN } />
        </label>
        <p>{baseNumberArray}</p>
        <p>{compareNumberArray}</p>
        <div className="base">
        <style jsx>{`
          .base {
          display:flex;
          width:10%;
          flex-direction: column;
        }
        .base .vennSvg{
          width:20%;
        }
        `}</style>
        <button onClick={this.changeBaseAll}>All</button>
        <button onClick={this.changeBaseOdd}>Odd</button>
        <button onClick={this.changeBaseEven}>Even</button>
        <button onClick={this.changeBasePrime}>Prime</button>
        <div className="vennSvg">
        <Venn sets={
          [
            {sets: ['A'], size: baseNumberArray.length},
            {sets: ['B'], size: compareNumberArray.length},
            {sets: ['A','B'], size:  union.length}
            // {sets: ['A'], size: baseArray.length},
            // {sets: ['B'], size: compareArray.length},
            // {sets: ['A','B'], size:  union.length}
          ]
        } />
        </div>
        </div>


        <div className="compare">
        <style jsx>{`
          .compare {
            float:right;
          display:flex;
          width:10%;
          flex-direction: column;
        }
        `}</style>
        <button onClick={this.changeCompareAll}>All</button>
        <button onClick={this.changeCompareOdd}>Odd</button>
        <button onClick={this.changeCompareEven}>Even</button>
        <button onClick={this.changeComparePrime}>Prime</button>
        </div>
        <p>A = {baseNumberArray.join(',')}</p>
        <p>B = {compareNumberArray.join(',')}</p>
        <p>A - B = {baseArray}</p>
        <p>B - A = {compareArray}</p>
        <p>A ∩ B = {union}</p>



      </div>

    )
  }
}
