import Header from '../../../Components/Header';
import PerfilComponentSideBar from '../../../Components/PerfilComponentSideBar';
import PerfilUserData from '../../../Components/PerfilUserData';

import * as s from './style';
export default function PerfilUser() {
	return (
		<s.PerfilUser>
			<Header />
			<main>
				<PerfilComponentSideBar />
				<PerfilUserData />
			</main>
		</s.PerfilUser>
	);
}
