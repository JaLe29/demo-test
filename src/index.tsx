/**
 * @class ExampleComponent
 */

import * as React from 'react'

// import styles from './styles.css'

export type Props = { text: string }
import Dva from './dva'

// export default class ExampleComponent extends React.Component<Props> {

// 	render() {
// 		const {
// 			text
// 		} = this.props

// 		return (
// 			<div className={styles.test}>
// 				xExample Component: {text}
// 			</div>
// 		)
// 	}
// }

const Home = () => {
	const [c, sc] = React.useState(0)

	return (
		<div>
			TEST
			{c}
			<button onClick={() => {
				console.log(c)
				console.log(c + 1)
				sc(1 + c)
			}}>CLICK ME</button>
			<Dva />
		</div>
	)
}

export default Home
