import { Link } from 'react-router-dom';

import * as s from './style';
import logosimples from './../../Assets/logosimples.png';
export default function Header() {
	return (
		<>
			<s.Header>
				<Link to={'/'}>
					<s.Logo src={logosimples} alt="Sneaken" />
				</Link>

				<div className="icons">
					<ion-icon name="menu-outline"></ion-icon>
					<ion-icon name="heart-outline"> </ion-icon>
					<ion-icon name="bag-outline"></ion-icon>
					<ion-icon
						name="person-outline"
						onClick={() => console.log('teste')}
					></ion-icon>
				</div>
			</s.Header>
		</>
	);
}
