import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import HomeComponent from '../../Components/HomeComponent';
import SideBar from '../../Components/SideBar';
import SignInComponent from './../../Components/SignInComponent';

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<SideBar />
				<HomeComponent />
			</main>
			<SignInComponent />
		</>
	);
}
