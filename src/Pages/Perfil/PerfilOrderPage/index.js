import Header from '../../../Components/Header';
import PerfilComponentSideBar from '../../../Components/PerfilComponentSideBar';
import PerfilOrders from '../../../Components/PerfilOrders';
import * as s from './style';
export default function PerfilOrderPage() {
	return (
		<s.PerfilUser>
			<Header />
			<main>
				<PerfilComponentSideBar />
				<PerfilOrders />
			</main>
		</s.PerfilUser>
	);
}
