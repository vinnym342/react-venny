import { Component } from 'react'
import Link from 'next/link'
import {findDOMNode} from 'react-dom'
import Head from '../components/head'
import Nav from '../components/nav'
import * as d3 from 'd3'
import * as venn from 'venn.js'

export default class Venn extends Component {
  // Variables which you use in your view
  // This is called whenever my <input> changes

  // View

  render() {
    return (
        <div id="numbers"></div>
    )
  }

  updateD3() {
    const el = findDOMNode(this)
    // var sets = [ {sets: ['A'], size: 12},
    //          {sets: ['B'], size: 12},
    //          {sets: ['A','B'], size: 2}];
      var sets = this.props.sets
      let valid = true
      if (sets[0]['size'] === 0 && sets[1]['size'] === 0){
        valid = false
      }
      if (valid === false) {
        sets=[
          {sets: ['A'], size: 15},
          {sets: ['B'], size: 15},
          {sets: ['A','B'], size:  15}
        ]
      }
       var chart = venn.VennDiagram()
       d3.select(el).datum(sets).call(chart);
  }

  componentDidMount() {
    this.updateD3()
  }

  componentDidUpdate() {
    this.updateD3()
  }
}
