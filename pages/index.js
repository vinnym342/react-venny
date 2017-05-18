import { Component } from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import { generateNumber } from '../utils/logic'
import { formatIntoList } from '../utils/format'

export default class HomePage extends Component {
  // Variables which you use in your view
  state = {
    n: '90'
  }

  // Actions

  // This is called whenever my <input> changes
  onChangegenerateNumberN = (event) => {
    // Get value from <input>
    const input = event.target
    const value = input.value
    // Change value of n in state
    this.state.n = baseToNumber(value, 10)
    // Call render() again and update the screen
    this.forceUpdate()
  }

  // View

  render() {
    const { n } = this.state
    //const n = this.state.n

  return (
  <div>
    <Head title="Home" />
    <Nav />

  <label style={{ display: 'block' }}>
    Enter number:
    <input value={ n } onChange={ this.onChangegenerateNumberN } />
  </label>

    <div className="hero">
      <h1 className="title">Welcome to Next!</h1>
      <p className="description">To get started, edit <code>pages/index.js</code> and save to reload.</p>
      <h3>Even</h3>
      {formatIntoList(generateNumber("Even",20))}
      <h3>Odd</h3>
      {formatIntoList(generateNumber("Odd",20))}
      <h3>All</h3>
      {formatIntoList(generateNumber("All",20))}
      <h3>Prime</h3>
      {formatIntoList(generateNumber("Prime",20))}

      <div className="row">
        <Link href="https://github.com/zeit/next.js#getting-started">
          <a className="card">
            <h3>Getting Started &rarr;</h3>
            <p>Learn more about Next on Github and in their examples</p>
          </a>
        </Link>
        <Link href="https://open.segment.com/create-next-app">
          <a className="card">
            <h3>Examples &rarr;</h3>
            <p>
              Find other example boilerplates on the <code>create-next-app</code> site
            </p>
          </a>
        </Link>
        <Link href="https://github.com/segmentio/create-next-app">
          <a className="card">
            <h3>Create Next App &rarr;</h3>
            <p>Was this tool helpful? Let us know how we can improve it</p>
          </a>
        </Link>
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title, .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9B9B9B;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
  )
}
}