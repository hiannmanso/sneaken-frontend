import Header from '../../../Components/Header';
import PerfilComponent from '../../../Components/PerfilComponent';
import PerfilOrders from '../../../Components/PerfilOrders';
import * as s from './style';
export default function PerfilOrderPage() {
	return (
		<s.PerfilUser>
			<Header />
			<main>
				<PerfilComponent />
				<PerfilOrders />
			</main>
		</s.PerfilUser>
	);
}
