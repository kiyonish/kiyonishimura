import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// import { TweenLite } from 'gsap'
// import { Expo } from 'gsap/EasePack'
import 'gsap/CSSPlugin'
// import config from '../../config'
import Helmet from 'react-helmet'

export default class Home extends Component {
  componentDidMount = () => {
    // TweenLite.from(ReactDOM.findDOMNode(this.refs.strapline), 1, { y: -10, delay: 2, ease: Expo.easeOut })
    // TweenLite.to(ReactDOM.findDOMNode(this.refs.strapline), 2, { delay: 2, css: { opacity: 1 }, ease: Expo.easeOut })
    // TweenLite.to(ReactDOM.findDOMNode(this.refs.copy), 4, { delay: 2.2, css: { opacity: 0 }, ease: Expo.easeOut })
  }
  render() {
    const styles = require('./Home.scss')
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <div ref="strapline" className={styles.strapline}>
          I'm Kiyo, a freelance front end web developer based in Sydney, Australia.
        </div>
        <div ref="copy">
          <p>For any project enquiries you can get in touch with me at kiyonish@gmail.com.</p>
        </div>
      </div>
    )
  }
}
