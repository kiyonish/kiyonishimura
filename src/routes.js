import React from 'react'
import { IndexRoute, Route } from 'react-router'

// import AnimationCanvas from './components/experiments/AnimationCanvas'

import {
    App,
    Home,
    NotFound,
  } from 'containers'

export default () => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="*" component={NotFound} status={404} />
    </Route>
  )
}


// <Route path="/animation/" component={AnimationCanvas} />
