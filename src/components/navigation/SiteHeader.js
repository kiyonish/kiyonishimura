import React from 'react'
// import ReactDOM from 'react-dom'
// import { TweenLite } from 'gsap'
// import { Expo } from 'gsap/EasePack'
import 'gsap/CSSPlugin'

// import { Link } from 'react-router'
export default class SiteHeader extends React.Component {
  componentDidMount = () => {
    // TweenLite.from(ReactDOM.findDOMNode(this.refs.site_name), 1, { y: -20, delay: 1, ease: Expo.easeOut })
    // TweenLite.from(ReactDOM.findDOMNode(this.refs.site_name), 2, { delay: 1, css: { opacity: 0 }, ease: Expo.easeOut })
  }

  render() {
    const styles = require('./SiteHeader.scss')
    return (
      <div className={styles.component}>
        <div ref="site_name" className={styles.site_name}>
          Kiyo Nishimura
        </div>
      </div>
    )
  }
}

