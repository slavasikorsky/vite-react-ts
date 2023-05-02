import logo from "../../assets/react.svg";
import Container from "../Container";
import Wrapper from "../Wrapper";
import Menu from "./Menu";

function Header() {
	return (
		<header style={{ margin: "20px 0" }}>
			<Container>
				<Wrapper>
					<img src={logo} alt="logo" />
					<Menu />
					<span>Vite + React TS</span>
				</Wrapper>
			</Container>
		</header>
	);
}

export default Header;
