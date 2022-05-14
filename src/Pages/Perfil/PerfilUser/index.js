import Header from '../../../Components/Header';
import PerfilComponent from '../../../Components/PerfilComponent';
import PerfilUserData from '../../../Components/PerfilUserData';

import * as s from './style';
export default function PerfilUser() {
	return (
		<s.PerfilUser>
			<Header />
			<main>
				<PerfilComponent />
				<PerfilUserData />
			</main>
		</s.PerfilUser>
	);
}
