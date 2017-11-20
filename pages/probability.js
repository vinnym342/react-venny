// import Spider from 'rc-spider';
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import { Component } from 'react'
import { generateCards,repeat } from '../utils/tree'
import React from 'react';
import ReactDOM from 'react-dom';

export default class HomePage extends Component {
  // Variables which you use in your view
  state = {
    n: 5,
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
  // View
  render() {

    const { n, base, compare } = this.state

    return (
      <div>
        <Head title="Home" />
        <Nav />
        <ul>{ generateCards().map(function(card,index){return <li>Card: {card[0]} {card[1]}</li> }
        ) }</ul>
        <style jsx>{`

        `}</style>
        {[<h1>Hi</h1>],[<h1>Hello</h1>]}
        <div className="diagram">
        </div>
      </div>

    )
  }
}
