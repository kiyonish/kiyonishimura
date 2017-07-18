import React from 'react'
import ReactDOM from 'react-dom'
import { TweenLite } from 'gsap'
import 'gsap/CSSPlugin'
import { Expo } from 'gsap/EasePack'
import GSAP from 'react-gsap-enhancer'


class AnimatedObjects extends React.Component {
  componentWillEnter(callback) {
    // console.log('componentWillEnter')
    callback()
  }
  // componentWillAppear(callback) {
  //   console.log('will appear')
  //   callback()
  // }
  // componentDidAppear() {
  //   console.log('componentDidAppear', ReactDOM.findDOMNode(this))
  //   // animateIn(ReactDOM.findDOMNode(this))
  // }

  componentDidEnter() {
    TweenLite.from(ReactDOM.findDOMNode(this), 1, {
      x: 300, ease: Expo.easeOut, onComplete: () => {
        TweenLite.from(ReactDOM.findDOMNode(this), 1, {
          css: { opacity: 0 }
        })
      }
    })
    // console.log('componentDidEnter', ReactDOM.findDOMNode(this))
    // animateIn(ReactDOM.findDOMNode(this))
  }

  componentWillLeave(callback) {
    // console.log('componentWillLeave')
    callback()
  }

  render() {
    return (
      <div>Hello</div>
    )
  }
}

// AnimatedObjects.propTypes = {
//   items: PropTypes.array
// }
// <div>{this.props.items.map((item, index) => (<div key={index}>Hello</div>))}</div>

export default GSAP()(AnimatedObjects)
