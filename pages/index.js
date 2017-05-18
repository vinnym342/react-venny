import { Component } from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import { generateNumber } from '../utils/logic'
import { formatIntoList } from '../utils/format'
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
    content: "Even"
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
  changeOptionAll = (event) => {
    // Change value of n in state
    this.state.content = "All"
    // Call render() again and update the screen
    this.forceUpdate()
  }
  changeOptionOdd = (event) => {
    // Change value of n in state
    this.state.content = "Odd"
    // Call render() again and update the screen
    this.forceUpdate()
  }
  changeOptionEven = (event) => {
    // Change value of n in state
    this.state.content = "Even"
    // Call render() again and update the screen
    this.forceUpdate()
  }
  changeOptionPrime = (event) => {
    // Change value of n in state
    this.state.content = "Prime"
    // Call render() again and update the screen
    this.forceUpdate()
  }

  // View

  render() {
    const { n } = this.state
    const { content } = this.state
    //const n = this.state.n

    return (
      <div>
        <Head title="Home" />
        <Nav />
        <div></div>
        <label style={{ display: 'block' }}>
          Enter decimal:
          <input value={ n } onChange={ this.changeN } />
        </label>
        <p>{  }</p>
        <button onClick={this.changeOptionAll}>All</button>
        <button onClick={this.changeOptionOdd}>Odd</button>
        <button onClick={this.changeOptionEven}>Even</button>
        <button onClick={this.changeOptionPrime}>Prime</button>
        <div id="numbers">{formatIntoList(generateNumber(content,n),"li")}</div>

        </div>

    )
  }
}
