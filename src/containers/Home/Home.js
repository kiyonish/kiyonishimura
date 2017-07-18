import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { TweenLite } from 'gsap'
import { Expo } from 'gsap/EasePack'
import 'gsap/CSSPlugin'
// import config from '../../config'
import Helmet from 'react-helmet'

export default class Home extends Component {
  componentDidMount = () => {
    TweenLite.from(ReactDOM.findDOMNode(this.refs.strapline), 1, { y: -20, delay: 2, ease: Expo.easeOut })
    TweenLite.from(ReactDOM.findDOMNode(this.refs.strapline), 2, { delay: 2, css: { opacity: 0 }, ease: Expo.easeOut })
  }
  render() {
    const styles = require('./Home.scss')
    return (
      <div>
        <Helmet title="Home"/>
        <div ref="strapline" className={styles.home}>
          I'm Kiyo, I'm a front end web develper based in Sydney, Australia.
        </div>
      </div>
    )
  }
}
