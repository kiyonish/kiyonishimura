import React from 'react'
import { Link } from 'react-router'
export default class SiteHeader extends React.Component {
	render() {
  const styles = require('./SiteHeader.scss')
  return (
			<div className={styles.component}>
				<div className={styles.site_name}>
					Kiyo Nishimura
				</div>
				<Link to={'/'}>Home</Link>
				<Link to={'/animation/'}>Animation</Link>
			</div>
		)
	}
}

