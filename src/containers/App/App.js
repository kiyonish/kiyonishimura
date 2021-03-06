import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import config from '../../config'
import SiteHeader from '../../components/navigation/SiteHeader'

import { asyncConnect } from 'redux-async-connect'

@asyncConnect([{
  promise: () => Promise.resolve()
}])

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
    user: PropTypes.object,
    logout: PropTypes.func,
    pushState: PropTypes.func
  }

  static contextTypes = {
    store: PropTypes.object.isRequired
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.user && nextProps.user) {
      // login
      this.props.pushState('/loginSuccess')
    } else if (this.props.user && !nextProps.user) {
      // logout
      this.props.pushState('/')
    }
  }

  handleLogout = (event) => {
    event.preventDefault()
    this.props.logout()
  }

  render() {
    const styles = require('./App.scss')

    return (
      <div className={styles.app}>
        <Helmet {...config.app.head}/>
        <div className={styles.fixedFrame} />
        <SiteHeader />
        <div className={styles.viewport}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
