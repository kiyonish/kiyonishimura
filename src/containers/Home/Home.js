import React, { Component } from 'react'

// import config from '../../config'
import Helmet from 'react-helmet'

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss')
    // require the logo image both from client and server
    // const logoImage = require('./logo.png')
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <div>
          Kiyo Nishimura is a front end web develper based in Sydney, AU.
        </div>
      </div>
    )
  }
}
