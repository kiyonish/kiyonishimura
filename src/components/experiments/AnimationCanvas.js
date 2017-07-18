import React from 'react'
import AnimatedObjects from './AnimatedObjects'
import TransitionGroup from 'react-transition-group/TransitionGroup'

class AnimationCanvas extends React.Component {
  state = {
    numbers: []
  }

  addItem = () => {
    const array = this.state.numbers.slice()
    array.push({})
    this.setState({ numbers: array })
  }

  removeItem = () => {
    if (this.state.numbers.length > 0) {
      const array = this.state.numbers.slice()
      array.pop()
      this.setState({ numbers: array })
      console.log(this.state.numbers)
    }
  }

  render() {
    const styles = require('./AnimationCanvas.scss')
    const items = this.state.numbers.map((object, index) => <AnimatedObjects key={index} /> )
    return (
			<div className={styles.animationCanvas}>
				<h1>Animation examples</h1>
        <button onClick={this.addItem}>Add</button>
        <button onClick={this.removeItem}>Remove</button>
				<TransitionGroup>
          {items}
				</TransitionGroup>
			</div>
		)
  }
}
export default AnimationCanvas
