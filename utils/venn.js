import { Component } from 'react'
import Link from 'next/link'
import {findDOMNode} from 'react-node'
import Head from '../components/head'
import Nav from '../components/nav'
import d3 from 'd3'
import venn from 'venn.js'
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

  // View

  render() {
    return (
        <div id="numbers"></div>
    )
  }
}
