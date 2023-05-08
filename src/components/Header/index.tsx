import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/react.svg";
import Container from "../Container";
import Wrapper from "../Wrapper";
import NavList from "./NavList";
import { RootState } from "../../store/store";
import { changeTheme } from "../../store/themeSlice";

function Header() {
	const theme = useSelector((state: RootState) => state.theme.value.mode);
	const dispatch = useDispatch();

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
		<header style={{ padding: "20px 0" }}>
			<Container>
				<Wrapper>
					<img src={logo} alt="logo" />
					<NavList dataList={menu} />
					<select
						name="theme"
						value={theme}
						onChange={(e) => dispatch(changeTheme(e.target.value))}
					>
						<option value="light">light</option>
						<option value="dark">dark</option>
					</select>
				</Wrapper>
			</Container>
		</header>
	);
}

export default Header;
