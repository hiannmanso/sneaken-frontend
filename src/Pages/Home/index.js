import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import FilterHome from '../../Components/FilterHome';
import SignUpComponent from '../../Components/SignUpComponent';
import SneakersComponent from '../../Components/SneakersComponent';
import SignInComponent from './../../Components/SignInComponent';

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<FilterHome />
				<SneakersComponent />
			</main>
		</>
	);
}
