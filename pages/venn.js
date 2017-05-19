import { Component } from 'react'
import Link from 'next/link'
import {findDOMNode} from 'react-dom'
import Head from '../components/head'
import Nav from '../components/nav'
import Venn from '../components/venn'

export default class VennPage extends Component {
  // View

  render() {
    return (
        <div id="numbers">
          <Venn sets={
            [
              {sets: ['A'], size: 12},
              {sets: ['B'], size: 10},
              {sets: ['C'], size: 9},
              {sets: ['A','B'], size:  5}
            ]
          } />
        </div>
    )
  }
}
