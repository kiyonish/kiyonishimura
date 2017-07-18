import React from 'react'

export default class SiteHeader extends React.Component {
	render() {
  const styles = require('./SiteHeader.scss')
  return (
			<div className={styles.component}>
				<div className={styles.site_name}>
					Kiyo Nishimura
				</div>
			</div>
		)
	}
}

