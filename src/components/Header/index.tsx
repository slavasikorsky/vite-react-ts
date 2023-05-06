import logo from "../../assets/react.svg";
import Container from "../Container";
import Wrapper from "../Wrapper";
import NavList from "./NavList";

function Header() {
	const menu = [
		{
			url: "/",
			text: "Home",
		},
		{
			url: "/blog",
			text: "Blog",
		},
		{
			url: "/404",
			text: "Not Found",
		},
	];
	return (
		<header style={{ margin: "20px 0" }}>
			<Container>
				<Wrapper>
					<img src={logo} alt="logo" />
					<NavList dataList={menu} />
					<span>Vite + React TS</span>
				</Wrapper>
			</Container>
		</header>
	);
}

export default Header;
